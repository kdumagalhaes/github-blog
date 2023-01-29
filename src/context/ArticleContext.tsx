import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { fetchArticleData } from '../utils/fetchArticleData/fetchArticleData'

interface ArticleProviderProps {
  children: ReactNode
}

interface ArticleContextModel {
  getArticleName: (articleName: string) => void
}

interface ApiResponseModel {
  items: [
    url: string,
    comments_url: string,
    title: string,
    created_at: string,
    user: { login: string },
    comments: number,
    body: string,
  ]
}

export const ArticleContext = createContext({} as ArticleContextModel)

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articleName, setArticleName] = useState('')
  const [apiResponse, setApiResponse] = useState<ApiResponseModel>()

  const getArticleName = (name: string) => {
    setArticleName(name)
  }

  useEffect(() => {
    fetchArticleData(articleName)
      .then((res) => res.json())
      .then((json) => {
        setApiResponse(json.items)
      })
  }, [articleName])

  const value = {
    getArticleName,
  }

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  )
}

export const useArticle = () => {
  const context = useContext(ArticleContext)

  if (context === undefined) {
    throw new Error('useArticle must be used within ArticleContext')
  }

  return context
}

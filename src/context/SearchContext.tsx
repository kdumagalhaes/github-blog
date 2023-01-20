import { createContext, ReactNode, useContext, useState } from 'react'
import { articles, ArticleModel } from '../mocks/articles'

interface SearchProviderProps {
  children: ReactNode
}

interface SearchContextModel {
  getSearchTerm: (term: string) => void
  articleList: ArticleModel[]
}

export const SearchContext = createContext({} as SearchContextModel)

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [articleList, setArticleList] = useState<ArticleModel[]>(articles)

  const getSearchTerm = (term: string) => {
    if (term === '' || term === undefined) {
      setArticleList(articles)
    } else {
      const filteredArticlesList = articles.filter((article) => {
        const articleTitle = article.title.toLowerCase()
        return articleTitle.includes(term.toLocaleLowerCase())
      })
      setArticleList(filteredArticlesList)
    }
  }

  const value = {
    articleList,
    getSearchTerm,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within SearchContext')
  }

  return context
}

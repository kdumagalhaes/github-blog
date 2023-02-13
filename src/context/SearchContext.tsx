import { createContext, ReactNode, useContext, useState } from 'react'
import useSWR from 'swr'
import { useDebounce, fetchArticlesList } from '../utils'

interface SearchProviderProps {
  children: ReactNode
}

interface ArticleModel {
  id: number
  number: number
  title: string
  state: string
  created_at: string
}

interface SearchContextModel {
  getSearchTerm: (term: string) => void
  articlesList: ArticleModel[]
  isLoading: boolean
}

export const SearchContext = createContext({} as SearchContextModel)

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 600)

  const url = `https://api.github.com/search/issues?q=${debouncedTerm}%20repo:kdumagalhaes/github-blog`

  const { data, isLoading } = useSWR(url, fetchArticlesList)

  const articlesList =
    data !== undefined
      ? data.filter((a: ArticleModel) => a.state === 'open')
      : []

  const getSearchTerm = (term: string) => {
    if (term !== '' || term !== undefined) {
      const normalizedTerm = term.toLowerCase().normalize()
      setTerm(normalizedTerm)
    }
  }

  const value = {
    articlesList,
    getSearchTerm,
    isLoading,
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

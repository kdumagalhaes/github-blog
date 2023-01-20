import { ChangeEvent } from 'react'
import { useSearch } from '../../context/SearchContext'
import { Container } from './styles'

export function SearchBar() {
  const { getSearchTerm, articleList } = useSearch()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getSearchTerm(event.target.value)
  }

  const articlesQuantity = articleList.length
  const publicacoesWord = articlesQuantity > 1 ? 'publicações' : 'publicação'

  return (
    <Container>
      <div className="top">
        <h3>Publicações</h3>
        <span>
          {articlesQuantity} {publicacoesWord}
        </span>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearch}
        autoFocus
      />
    </Container>
  )
}

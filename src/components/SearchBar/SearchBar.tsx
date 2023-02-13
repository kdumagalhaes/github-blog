import { ChangeEvent, useRef } from 'react'
import { useSearch } from '../../context/SearchContext'
import { Container } from './styles'
import { debounce } from 'lodash'

export function SearchBar() {
  const { getSearchTerm, articlesList } = useSearch()

  const debouncedSearch = useRef(
    debounce((term: string) => getSearchTerm(term), 300),
  ).current

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target
    debouncedSearch(nextValue)
  }

  const articlesQuantity = articlesList === undefined ? 0 : articlesList.length
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

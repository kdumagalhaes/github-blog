import { ChangeEvent, useState } from 'react'
import { Container } from './styles'

export function SearchBar() {
  const [term, setTerm] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  return (
    <Container>
      <div className="top">
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar conteúdo"
        value={term}
        onChange={handleSearch}
      />
    </Container>
  )
}

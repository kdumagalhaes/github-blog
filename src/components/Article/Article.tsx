import { Container } from './styles'

export function Article() {
  return (
    <Container href="#">
      <div className="top">
        <h3 className="title">JavaScript data types and data structures</h3>
        <span className="date">Há 1 dia</span>
      </div>
      <p className="article-summary">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </Container>
  )
}

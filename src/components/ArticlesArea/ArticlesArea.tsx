import { Article } from '../Article/Article'
import { Container } from './styles'
import { articles } from '../../mocks/articles'

export function ArticlesArea() {
  return (
    <Container>
      {articles.map(({ id, title, date, summary, url }) => {
        return (
          <Article
            key={id}
            id={id}
            title={title}
            date={date}
            summary={summary}
            url={url}
          />
        )
      })}
    </Container>
  )
}

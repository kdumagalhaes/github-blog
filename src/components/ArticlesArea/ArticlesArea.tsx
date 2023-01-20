import { Article } from '../Article/Article'
import { Container } from './styles'
import { useSearch } from '../../context/SearchContext'

export function ArticlesArea() {
  const { articleList } = useSearch()
  return (
    <Container>
      {articleList.map(({ id, title, date, summary, url }) => {
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

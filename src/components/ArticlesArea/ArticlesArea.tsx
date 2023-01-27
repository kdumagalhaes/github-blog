import { ArticleCard } from '../ArticleCard/ArticleCard'
import { Container } from './styles'
import { useSearch } from '../../context/SearchContext'

export function ArticlesArea() {
  const { articleList } = useSearch()
  return (
    <Container>
      {articleList.map(({ id, title, date, summary, url }) => {
        return (
          <ArticleCard
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

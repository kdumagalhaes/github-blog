import { ArticleModel } from '../../mocks/articles'
import { Container } from './styles'

interface ArticleProps extends ArticleModel {}

export function ArticleCard({ id, title, date, summary, url }: ArticleProps) {
  const dayWord = date > 1 ? 'dias' : 'dia'

  return (
    <Container key={id} href={url}>
      <div className="top">
        <h3 className="title">{title}</h3>
        <span className="date">
          Há {date} {dayWord}
        </span>
      </div>
      <p className="article-summary">{summary}</p>
    </Container>
  )
}

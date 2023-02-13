import { NavLink } from 'react-router-dom'
import { Container } from './styles'
import { formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
interface ArticleProps {
  number: number
  title: string
  summary: string
  date: string
}

export function ArticleCard({ title, date, summary, number }: ArticleProps) {
  const summarizedArticle = summary.substring(0, 200) + '...'
  const formatted = formatDistance(subDays(new Date(date), 3), new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Container>
      <NavLink
        className="link"
        key={number}
        to={{ pathname: `/article/${number}` }}
      >
        <div className="top">
          <h3 className="title">{title}</h3>
          <span className="date">{formatted}</span>
        </div>
        <p className="article-summary">{summarizedArticle}</p>
      </NavLink>
    </Container>
  )
}

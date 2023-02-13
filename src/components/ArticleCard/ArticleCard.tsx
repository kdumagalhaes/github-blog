import { NavLink } from 'react-router-dom'
import { Container } from './styles'

interface ArticleProps {
  number: number
  title: string
  summary: string
  date: string
}

export function ArticleCard({ title, date, summary, number }: ArticleProps) {
  return (
    <Container>
      <NavLink
        className="link"
        key={number}
        to={{ pathname: `/article/${number}` }}
      >
        <div className="top">
          <h3 className="title">{title}</h3>
          <span className="date">Há {date}</span>
        </div>
        <p className="article-summary">{summary}</p>
      </NavLink>
    </Container>
  )
}

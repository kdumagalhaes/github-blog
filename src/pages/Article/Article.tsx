import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'

export function Article() {
  return (
    <Container>
      <div className="article-info">
        <div className="top">
          <Link to="/" className="back-link link">
            <FontAwesomeIcon
              icon={faChevronLeft}
              color="#3294F8"
              className="github-icon icon"
            />
            <span className="link-text">Voltar</span>
          </Link>
          <a
            href="/"
            className="github-link link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-text">Ver no Github</span>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              color="#3294F8"
              className="github-icon icon"
            />
          </a>
        </div>
        <h2 className="article-title">
          JavaScript data types and data structures
        </h2>
        <ul className="data-list">
          <li>
            <FontAwesomeIcon
              className="data-list-icon"
              icon={faGithub as IconProp}
              color="#3A536B"
            />
            kdumagalhaes
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCalendarDay}
              color="#3A536B"
              className="calendar-icon"
            />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon
              icon={faComment}
              color="#3A536B"
              className="comment-icon"
            />
            5 comentários
          </li>
        </ul>
      </div>
      <article className="article-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
      </article>
    </Container>
  )
}

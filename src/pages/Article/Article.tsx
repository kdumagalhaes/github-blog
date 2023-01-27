import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function Article() {
  return (
    <Container>
      <div className="article-info">
        <div className="top">
          <a href="/" className="back-anchor">
            Voltar
          </a>
          <a href="/" className="github-link" target="_blank" rel="noreferrer">
            <span className="link-text">GITHUB</span>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              color="#3294F8"
              className="github-icon"
            />
          </a>
        </div>
      </div>
      <article className="article-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptates nisi ex nihil impedit laboriosam inventore porro dolorum rem
        at consequuntur neque ipsum, ipsa quam quaerat incidunt optio qui animi?
      </article>
    </Container>
  )
}

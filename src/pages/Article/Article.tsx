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
import { Link, useLocation } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { fetchArticleData } from '../../utils/fetchArticleData/fetchArticleData'
import { normalizePathname } from '../../utils/normalizePathname/normalizePathname'
import ReactMarkdown from 'react-markdown'
interface ApiResponseModel {
  id: number
  url: string
  comments_url: string
  title: string
  created_at: string
  user: { login: string }
  comments: number
  body: string
}

export function Article() {
  const { pathname } = useLocation()
  const [articleData, setArticleData] = useState<ApiResponseModel[]>()

  const normalizedPathname = normalizePathname(pathname)

  useEffect(() => {
    fetchArticleData(normalizedPathname).then((data) =>
      setArticleData(data?.items),
    )
  }, [pathname, normalizedPathname])

  return (
    <Container>
      {articleData?.map((data) => {
        return (
          <Fragment key={data.id}>
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
                  href={data.url}
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
              <h2 className="article-title">{data.title}</h2>
              <ul className="data-list">
                <li>
                  <FontAwesomeIcon
                    className="data-list-icon"
                    icon={faGithub as IconProp}
                    color="#3A536B"
                  />
                  {data.user.login}
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
                  {data.comments} comentários
                </li>
              </ul>
            </div>
            <article className="article-content">
              <ReactMarkdown>{data.body}</ReactMarkdown>
            </article>
          </Fragment>
        )
      })}
    </Container>
  )
}

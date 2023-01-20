import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Fragment, useEffect, useState, useCallback } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface ProfileProps {
  username: string
}

interface UserData {
  id: number
  avatar_url: string
  login: string
  name: string
  bio: string
  html_url: string
  company: string
  followers: number
}

export function Profile({ username }: ProfileProps) {
  const [user, setUser] = useState<UserData[]>([
    {
      id: 0,
      avatar_url: '',
      login: '',
      name: '',
      bio: '',
      html_url: '',
      company: '',
      followers: 0,
    },
  ])

  const fetchUser = useCallback((username: string) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser([data]))
      .catch((error) => console.warn(error))
  }, [])

  useEffect(() => {
    fetchUser(username)
  }, [fetchUser, username])

  return (
    <Container role="profile">
      {user.map((data) => {
        return (
          <Fragment key={data.id}>
            <img
              src={data.avatar_url}
              alt={data.name}
              className="profile-img"
            />
            <div className="wrapper">
              <div className="head">
                <h2 className="profile-title">{data.name}</h2>
                <a
                  href={data.html_url}
                  className="github-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-text">GITHUB</span>
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    color="#3294F8"
                    className="github-icon"
                  />
                </a>
              </div>
              <p className="profile-description">{data.bio}</p>
              <ul className="data-list">
                <li>
                  <FontAwesomeIcon
                    className="data-list-icon"
                    icon={faGithub as IconProp}
                    color="#3A536B"
                  />{' '}
                  {data.login}
                </li>
                <li>
                  <FontAwesomeIcon
                    className="data-list-icon"
                    icon={faBuilding}
                    color="#3A536B"
                  />
                  {data.company || 'No company'}
                </li>
                <li>
                  <FontAwesomeIcon
                    className="data-list-icon"
                    icon={faUserGroup}
                    color="#3A536B"
                  />
                  {data.followers}{' '}
                  {data.followers > 1 ? 'seguidores' : 'seguidor'}
                </li>
              </ul>
            </div>
          </Fragment>
        )
      })}
    </Container>
  )
}

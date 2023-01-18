import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <Container role="profile">
      <img src="" alt="" className="profile-img" />
      <div className="wrapper">
        <div className="head">
          <h2 className="profile-title">Cameron Williamson</h2>
          <a href="#" className="github-link">
            <span className="link-text">GITHUB</span>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              color="#3294F8"
              className="github-icon"
            />
          </a>
        </div>
        <p className="profile-description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul className="data-list">
          <li>
            <FontAwesomeIcon
              className="data-list-icon"
              icon={faGithub}
              color="#3A536B"
            />{' '}
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon
              className="data-list-icon"
              icon={faBuilding}
              color="#3A536B"
            />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon
              className="data-list-icon"
              icon={faUserGroup}
              color="#3A536B"
            />
            32 seguidores
          </li>
        </ul>
      </div>
    </Container>
  )
}

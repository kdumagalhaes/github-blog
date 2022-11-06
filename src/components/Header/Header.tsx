import { Container } from './styles'
import LogoImg from '../../assets/images/logo-github-blog.svg'

export function Header() {
  return (
    <Container>
      <h1 className="logo-seo">
        Github blog
        <a href="/" className="logo-link">
          <img src={LogoImg} alt="github blog logo" className="logo-img" />
        </a>
      </h1>
    </Container>
  )
}

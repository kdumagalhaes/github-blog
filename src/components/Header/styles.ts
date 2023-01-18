import styled from 'styled-components'
import CoverBg from '../../assets/images/cover-bg.svg'

export const Container = styled.header`
  height: 18.5rem;
  background-image: url(${CoverBg});
  display: flex;
  justify-content: center;

  .logo-seo {
    display: block;
    position: absolute;
    font-size: 1px;
    color: transparent;
    margin-top: 65px;
  }
`

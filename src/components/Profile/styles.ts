import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  height: 13.25rem;
  margin: -90px auto 0 auto;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }

  .profile-img {
    width: 100%;
    max-width: 9.25rem;
    height: 9.25rem;
    background-color: lightgray;
    border-radius: 8px;
    margin-right: 2rem;

    @media only screen and (max-width: 600px) {
      margin: 0 auto 1rem auto;
    }
  }

  .profile-title {
    font-size: 1.5rem;

    @media only screen and (max-width: 600px) {
      margin: 0 auto;
    }
  }

  .profile-description {
    font-weight: 400;
    color: ${({ theme }) => theme['base-text']};
    line-height: 160%;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .github-link {
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s;

    .link-text,
    .github-icon {
      font-size: 0.75rem;
    }

    .link-text {
      color: ${({ theme }) => theme.blue};
      margin-right: 0.5rem;
    }

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.blue};
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .head,
  .data-list {
    display: flex;
  }
  .head {
    justify-content: space-between;
    align-items: center;
  }

  .data-list {
    gap: 2rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme['base-text']};
    }

    .data-list-icon {
      height: 1.125rem;
      width: 1.125rem;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .loader {
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    max-width: 54rem;
  }
`

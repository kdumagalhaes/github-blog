import styled from 'styled-components'

export const Container = styled.div`
  .article-info {
    max-width: 54rem;
    margin: -90px auto 0 auto;
    background-color: ${({ theme }) => theme['base-profile']};
    border-radius: 10px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;

    .top,
    .data-list {
      display: flex;

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }
    .top {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .article-title {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .link {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 700;
      transition: all 0.3s;

      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.blue};
      }
    }

    .icon {
      font-size: 0.75rem;
    }

    .back-link {
      margin-left: 0.6px;
    }

    .link-text {
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    .data-list {
      gap: 2rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${({ theme }) => theme['base-span']};
      }

      .data-list-icon {
        height: 1.125rem;
        width: 1.125rem;
      }
    }
  }

  .article-content {
    max-width: 54rem;
    padding: 2.5rem 2rem;
    margin: 0 auto 8rem auto;
    line-height: 1.6rem;

    p {
      margin-bottom: 1.5rem;
      font-weight: 400;
    }

    h2,
    h3 {
      margin-bottom: 1rem;
    }

    pre {
      background-color: ${({ theme }) => theme['base-border']};
      border-radius: 5px;
      padding: 1rem;
      margin-bottom: 1rem;
      white-space: pre-wrap;

      @media only screen and (max-width: 600px) {
        word-wrap: break-word;
      }
    }

    a {
      color: ${({ theme }) => theme.blue};
      transition: color 0.3s;

      &:hover,
      &:visited {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }

  .loader {
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    max-width: 54rem;
  }
`

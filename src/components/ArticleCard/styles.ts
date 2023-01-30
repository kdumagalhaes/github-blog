import styled from 'styled-components'

export const Container = styled.div`
  .link {
    display: block;
    padding: 2rem;
    max-width: 26rem;
    height: 100%;
    text-decoration: none;
    outline: transparent;
    border-radius: 10px;
    transition: outline 0.3s;
    background-color: ${({ theme }) => theme['base-post']};

    &:hover {
      outline: 1px solid ${({ theme }) => theme['base-span']};
    }

    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .title {
        font-size: 1.25rem;
        color: ${({ theme }) => theme['base-title']};
        line-break: normal;
        line-height: 32px;
        max-width: 17rem;
      }

      .date {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-span']};
      }
    }

    .article-summary {
      color: ${({ theme }) => theme['base-text']};
      margin-top: 1.25rem;
      line-height: 25.6px;
    }
  }
`

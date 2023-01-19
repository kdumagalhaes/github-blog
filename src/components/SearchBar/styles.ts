import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  .search-input {
    width: 100%;
    height: 50px;
    margin-top: 0.9rem;
    background: ${({ theme }) => theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    padding-left: 1rem;
    caret-color: ${({ theme }) => theme['base-span']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

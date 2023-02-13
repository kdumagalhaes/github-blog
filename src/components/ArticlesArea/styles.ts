import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  margin: 3rem auto 15rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  .loader {
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`

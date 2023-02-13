import styled from 'styled-components'

export const Container = styled.div`
  max-width: 54rem;
  margin: 3rem auto 15rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 0;

  .loader {
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`

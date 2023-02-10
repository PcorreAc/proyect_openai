import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  background: #242424;

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

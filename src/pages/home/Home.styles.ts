import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 3rem;
`

export const Table = styled.table`
  min-width: min(100%, 360px);

  td:last-of-type {
    text-align: right;
  }
`

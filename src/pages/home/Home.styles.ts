import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Table = styled.table`
  min-width: min(100%, 360px);

  td:nth-of-type(2) {
    text-align: right;
  }
`

import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
`

export const Main = styled.main`
  min-height: 100vh;
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h2 {
    color: rgb(255, 98, 0);
  }

  h2 {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
    color: rgb(0, 0, 238);
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 768px;
  margin-top: 16px;

  tr:nth-child(3) {
    color: ${props => props.courseStatus ? 'green' : 'red'};
  }
`

export const TableBody = styled.tbody`
  @media screen and (min-width: 768px) {
    width: calc(50% - 10px);
    display: inline-block;
    vertical-align: top;
    
    &:first-child {
      margin-right: 5px
    }
    
    &:last-child {
      margin-left: 5px
    }
    
  }
`

export const Row = styled.tr`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: block;
  line-height: 32px;
  min-width: 100%;

  &:first-child {
    border-top: 1px solid rgba(0,0,0,0.1);
  }
`

export const Cell = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-between
`

export const Bold = styled.b`
  color: black;
`
import styled from "styled-components";

export const DetailsTable = styled.table<{ courseStatus: boolean}>`
  border-collapse: collapse;
  width: 100%;
  max-width: 768px;
  margin-top: 16px;

  tr:nth-child(3) {
    color: ${props => props.courseStatus ? 'green' : 'red'};
  }
`

export const DetailsTableBody = styled.tbody`
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

export const DetailsRow = styled.tr`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: block;
  line-height: 32px;
  min-width: 100%;

  &:first-child {
    border-top: 1px solid rgba(0,0,0,0.1);
  }
`

export const DetailsCell = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-between
`

export const DetailsBold = styled.b`
  color: black;
`
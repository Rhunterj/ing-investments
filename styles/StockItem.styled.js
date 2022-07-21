import styled from 'styled-components';

export const Row = styled.tr`
  &.changeDetected {
   background-color: #F5F5F5;
  }

  border-bottom: 1px solid rgba(0,0,0,0.1);

  &:first-child {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  td:nth-child(3), td:nth-child(4) {
    color: ${props => props.courseStatus ? 'green' : 'red'}
  }

  @media screen and (min-width: 768px) {
    line-height: 30px;
  }
`

export const Cell = styled.td`
    width: 50%;
    display: inline-block;

    a {
      text-decoration: underline;
      color: rgb(0, 0, 238);
    }
    
    &:nth-child(4) {
      text-align: center;
    }

    @media screen and (max-width: 767px) {
      &:nth-child(even) {
        text-align: right;
      }

      &:last-child {
        padding-bottom: 5px;
        text-align: right;
        width: 100%;
      }
    }
    
    @media screen and (min-width: 768px) {
      width: auto;
      display: table-cell;
      text-align: right;

      &:first-child{
        text-align: left;
      }

      &:nth-child(4) {
        width: 25%;
      }
    }
`
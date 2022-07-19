import styled, { keyframes } from 'styled-components';

export const Row = styled.tr`
  animation: 0.2s ${props => props.hasChanged ? highlight : ''} ease-in-out;
  border-bottom: 1px solid black;

  td:nth-child(3), td:nth-child(4) {
    color: ${props => props.courseStatus ? 'green' : 'red'}
  }
`

export const Cell = styled.td`
    width: 50%;
    display: inline-block;

    a {
      text-decoration: underline;
      color: rgb(0, 0, 238);
    }

    &:first-child{
      padding-top: 5px;
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
      padding: 10px 0;

      &:first-child{
        text-align: left;
      }

      &:nth-child(4) {
        width: 25%;
      }
    }
`

const highlight = keyframes`
    0% {
      color: red;
    }
    30% {
      color: blue;
    }
    100% {
      color: none;
    }
  } 
`
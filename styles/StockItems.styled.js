import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  thead {
    display: none;
  }

  @media screen and (min-width: 768px) {
    thead {
      display: table-header-group;
    }

    th {
      text-align: right;
    }
    
    th:first-child{
      text-align: left;
    }
  }
`
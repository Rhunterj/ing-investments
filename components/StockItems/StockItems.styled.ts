import styled from 'styled-components';

export const StockItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  max-width: 768px;


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

    th:nth-child(4){
      text-align: center;
    }
  }
`
import styled from 'styled-components';

export const TableOrders = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: red;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

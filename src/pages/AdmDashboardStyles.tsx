import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 900px; 
`;

export const Title = styled.h1`
  display: flex;
  justify-content:center;
`

export const ToggleButton = styled.button`
  display: block;       
  width: 250px;        
  padding: 0.75rem;
  margin: 0 auto 1rem;   
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 0.9rem;

  thead {
    display: none; /* ocultar cabeçalho no mobile */
  }

  tbody tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0.5rem;
  }

  tbody tr td {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: attr(data-label);
      font-weight: bold;
      flex: 1;
    }

    span {
      flex: 1;
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    thead {
      display: table-header-group;
    }

    tbody tr {
      display: table-row;
      border: none;
      padding: 0;
      margin: 0;
    }

    tbody tr td {
      display: table-cell;
      padding: 0.75rem;
      border-bottom: 1px solid #eee;

      &::before {
        display: none;
      }

      span {
        text-align: left;
      }
    }
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem;
  background-color: #f0f0f0;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`;

export const Td = styled.td``;

export const CompleteButton = styled.button`
  padding: 6px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

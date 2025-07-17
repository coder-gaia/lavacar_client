import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: #f9f9f9;
  padding-bottom: 3rem;
`;


export const Title = styled.h1`
  display: flex;
  justify-content:center;
`

export const ToggleButton = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 0.75rem;
  margin: 0 auto 2rem; /* 👈 aqui aumenta */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: block;
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
    display: none;
  }

  tbody tr {
    display: block;
    background-color: white;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
      font-weight: 600;
      flex: 1;
      color: #555;
    }

    span {
      flex: 1;
      text-align: right;
      color: #333;
    }
  }

  @media (min-width: 768px) {
    thead {
      display: table-header-group;
    }

    tbody tr {
      display: table-row;
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
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
  width: 100%;
  max-width: 150px;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

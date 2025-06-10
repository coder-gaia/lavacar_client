import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  min-height: 450px;
  padding: 1.5rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  text-align: center;
  border: 2px solid #000;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  p {
    margin-top: 1rem;
  }


  @media (min-width: 768px) {
    width: 500px;
    padding: 2rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;             /
  max-width: 300px;       
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Input = styled.input`
  width: 100%; 
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  box-sizing:border-box;

  &:focus {
    border-color: #007bff;
    background-color: #fff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem 0.9rem;

  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.15s ease;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  box-sizing: border-box; 

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem 0.9rem;
  }
`;

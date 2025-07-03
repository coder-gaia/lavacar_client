import styled from 'styled-components'

export const BookingWrapper = styled.div`
  width:80%;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  background-color: #fff;
  text-align: center;

  @media (max-width: 480px) {
    /* Em telas super pequenas, estreita ainda mais para criar margem nas laterais */
    width: 85%;
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    /* No desktop/tablet, fixa 500px */
    width: 500px;
    padding: 2rem;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 0.25rem;
`
export const ObservationInput = styled.textarea`
  resize:none;
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 0.25rem;
`

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 0.25rem;
`

export const OptionDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`

export const DurationInfo = styled.p`
  margin-top: 0.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`

export const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem 1.25rem;
  }
`

export const ADMButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  margin-top:20px;
  padding: 0.75rem 1.5rem;
  background-color:#0c4f54;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0a3336;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.65rem 1.25rem;
  }
`
export const SummaryContainer = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const SummaryItem = styled.div`
  margin-bottom: 0.75rem;
`;

export const Message = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

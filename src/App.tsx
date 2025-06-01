import { styled } from 'styled-components';
import './App.css'
import AppRoutes from './routes'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  return (
      <Container>
        <AppRoutes/>
      </Container> 
  )
}

export default App

import { Link } from 'react-router-dom'
import { Button, FormContainer, Input, MainWrapper } from './HomeStyles'

const Home = () => {
  return (
    <MainWrapper>
      <h1>LavaCar Fast</h1>
      <p>Entre na sua conta!</p>
      <FormContainer>
        <Input type="text" placeholder='Seu email'/>
        <Input type="password" placeholder='Sua senha' />
        <Link to="/booking"><Button type='submit'>Login</Button></Link>
      </FormContainer>
      <p>
        Não tem conta? <Link to="/register"><b>Registrar-se</b></Link>
      </p>
    </MainWrapper>
  )
}

export default Home
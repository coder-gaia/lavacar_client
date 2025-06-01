import { Link } from 'react-router-dom'
import { Button, FormContainer, Input, MainWrapper } from './HomeStyles'


const Registro = () => {
  return (
    <MainWrapper>
      <h1>LavaCar Fast</h1>
      <p>Crie sua conta!</p>
      <FormContainer>
        <Input type="text" placeholder='Seu nome'/>
        <Input type="email" placeholder='Seu email'/>
        <Input type="password" placeholder='Sua senha' />
        <Button type='submit'>Registrar</Button>
      </FormContainer>
      <p>
        Não tem conta? <Link to="/"><b>Login</b></Link>
      </p>
    </MainWrapper>
  )
}

export default Registro
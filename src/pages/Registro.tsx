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
        <Link to="/login"><Button type='submit'>Registrar</Button></Link>
      </FormContainer>
      <p>
        Entre na sua conta <Link to="/login"><b>Login</b></Link>
      </p>
    </MainWrapper>
  )
}

export default Registro
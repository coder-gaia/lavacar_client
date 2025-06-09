import { Button, FormContainer, Input, MainWrapper } from './HomeStyles'

const Home = () => {
  return (
    <MainWrapper>
      <h1>LavaCar Fast</h1>
      <p>Entre na sua conta!</p>
      <FormContainer>
        <Input type="text" placeholder='Seu email'/>
        <Input type="password" placeholder='Sua senha' />
        <Button type='submit'>Login</Button>
      </FormContainer>
    </MainWrapper>
  )
}

export default Home
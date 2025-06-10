import { useState } from 'react';
import { Button, FormContainer, Input, MainWrapper } from './AdmLoginPageStyles'
import { useNavigate } from 'react-router-dom';

const AdmLoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  if (email === 'admin@lavacar.com' && password === 'senha123') {
    navigate('/admin-dashboard'); 
  } else {
    setError('Credenciais inválidas');
  }
}

  return (
    <MainWrapper>
      <h1>LavaCar Fast</h1>
      <p>Entre na sua conta!</p>
      <FormContainer>
        <Input type="text" placeholder='Seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder='Sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        <Button type='submit' onClick={handleLogin}>Login</Button>
      </FormContainer>
    </MainWrapper>
  )
}

export default AdmLoginPage
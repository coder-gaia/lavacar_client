import { useState } from 'react';
import { Button, FormContainer, Input, MainWrapper } from './AdmLoginPageStyles'
import { useNavigate } from 'react-router-dom';
import {loginAdmin} from '../api/auth'

const AdmLoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const data = await loginAdmin({email, password});
    localStorage.setItem("authToken", data.token)
    navigate("/admin-dashboard")
  } catch (err:any) {
    setError(err.response?.data?.message || "Erro no login");
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
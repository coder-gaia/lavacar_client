import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Registro from '../pages/Registro'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
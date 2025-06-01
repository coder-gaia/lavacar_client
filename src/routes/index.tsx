import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import Booking from '../pages/Booking'
import ConfirmBooking from '../pages/ConfirmBooking'
import Success from '../pages/Success'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Registro/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/confirm' element={<ConfirmBooking/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from '../pages/Booking'
import ConfirmBooking from '../pages/ConfirmBooking'
import Success from '../pages/Success'
import AdmLoginPage from '../pages/AdmLoginPage'
import AdmDashboard from '../pages/AdmDashboard'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Booking/>}/>
        <Route path='/login' element={<AdmLoginPage/>}/>
        <Route path='/confirm' element={<ConfirmBooking/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/admin-dashboard' element={<AdmDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
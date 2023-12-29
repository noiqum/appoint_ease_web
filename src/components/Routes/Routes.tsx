import { AnimatePresence } from 'framer-motion'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom'
import RegisterPage from '../../pages/RegisterPage'
import DashBoardPage from '../../pages/DashBoardPage'
import Appointments from '../Appointments/Appointments'
import Arrange from '../Arrange/Arrange'

const Routes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <RouterRoutes location={location} key={location.pathname}>
        <Route path='/' index Component={HomePage}></Route>
        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/register' Component={RegisterPage}></Route>
        <Route path='/dashboard' Component={DashBoardPage}>
          <Route path='/dashboard/appointments' Component={Appointments}></Route>
          <Route path='/dashboard/calendar' Component={Arrange}></Route>
        </Route>
      </RouterRoutes>
    </AnimatePresence>
  )
}

export default Routes

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
      <RouterRoutes location={location} key={location.pathname.split('/')[1]}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashBoardPage />}>
          <Route path='appointments' element={<Appointments />} />
          <Route path='calendar' element={<Arrange />} />
        </Route>
      </RouterRoutes>
    </AnimatePresence>
  )
}

export default Routes

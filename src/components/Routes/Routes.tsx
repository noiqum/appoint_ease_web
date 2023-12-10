import { AnimatePresence } from 'framer-motion'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import { Route, Routes as RouterRoutes, useLocation } from 'react-router-dom'

const Routes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <RouterRoutes location={location} key={location.pathname}>
        <Route path='/' index Component={HomePage}></Route>
        <Route path='/login' Component={LoginPage}></Route>
      </RouterRoutes>
    </AnimatePresence>
  )
}

export default Routes

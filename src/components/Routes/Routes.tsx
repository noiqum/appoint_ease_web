import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import { Route, Routes as RouterRoutes } from 'react-router-dom'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path='/' index Component={HomePage}></Route>
      <Route path='/login' Component={LoginPage}></Route>
    </RouterRoutes>
  )
}

export default Routes

import React, { useState } from 'react'
import './Navigation.scss'
import Logo from '../Logo/logo'
import { useAppSelector } from '../../store/hooks'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isLogin = useAppSelector((state: RootState) => state.auth.isLogin)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='navigation text-themenavy'>
        <div className='navigation__logo'>
          <Logo link />
          <span>Appointment Ease</span>
        </div>
        <div className='navigation__menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            {isLogin ? <Link to={'/logout'}>Logout</Link> : <Link to={'/login'}>Login</Link>}
          </ul>
        </div>
        <div
          className={isOpen ? 'navigation__hamburger active' : 'navigation__hamburger'}
          onClick={toggleMenu}
        >
          <div className='navigation__hamburger__line'></div>
          <div className='navigation__hamburger__line'></div>
          <div className='navigation__hamburger__line'></div>
        </div>
      </nav>
      <aside className={isOpen ? 'navigation__aside active' : 'navigation__aside'}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          {isLogin ? <Link to={'/logout'}>Logout</Link> : <Link to={'/login'}>Login</Link>}
        </ul>
      </aside>
    </>
  )
}

export default Navigation

import React from 'react'
import './LoginPage.scss'
import Logo from '../components/Logo/logo'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import Transition from '../components/Transition/Transition'

function LoginPage() {
  const navigate = useNavigate()
  const homePageRedirect = () => {
    navigate('/')
  }
  return (
    <Transition>
      <div
        data-testid='LoginPage'
        className='LoginPage bg-lightgrey w-full h-screen overflow-hidden flex justify-center'
      >
        <div className='LoginPage__frame'>
          <Logo link={true}></Logo>
          <h3>
            Sign in to{' '}
            <b onClick={homePageRedirect} className='cursor-pointer font-semibold'>
              AppointEase
            </b>
          </h3>
          <LoginForm />
        </div>
      </div>
    </Transition>
  )
}

export default LoginPage

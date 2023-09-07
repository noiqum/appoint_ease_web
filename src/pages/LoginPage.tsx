import React, { useEffect } from 'react'
import './LoginPage.scss'

import Logo from '../components/Logo/logo'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { login } from '../Api/Services'

export default function LoginPage() {
  useEffect(() => {
    login({
      email: 'testhccm@gmail.com',
      password: '123456',
    })
  }, [])
  return (
    <div
      data-testid='LoginPage'
      className='LoginPage bg-lightgrey w-full h-screen overflow-hidden flex justify-center'
    >
      <div className='LoginPage__frame'>
        <Logo></Logo>
        <h3>Sign in to AppointEase</h3>
        <LoginForm />
      </div>
    </div>
  )
}

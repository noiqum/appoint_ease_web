import React from 'react'
import './LoginPage.scss'
import Logo from '../components/Logo/logo'
import { LoginForm } from '../components/LoginForm/LoginForm'

export default function LoginPage() {
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

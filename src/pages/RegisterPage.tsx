import React from 'react'
import Transition from '../components/Transition/Transition'
import Logo from '../components/Logo/logo'
import { RegisterForm } from '../components/RegisterForm/RegisterForm'
import './RegisterPage.scss'
function RegisterPage() {
  return (
    <Transition>
      <div className='RegisterPage bg-lightgrey w-full h-screen overflow-hidden flex justify-center'>
        <div className='RegisterPage__frame'>
          <Logo link={true}></Logo>
          <h2>Sign up for AppointEase</h2>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </Transition>
  )
}

export default RegisterPage

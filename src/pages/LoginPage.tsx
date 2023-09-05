import React from 'react'
import './LoginPage.scss'
import { Button } from '../components/Button/Button'

export default function LoginPage() {
  return (
    <div data-testid='LoginPage' className='LoginPage'>
      <p>Loginpage</p>
      <Button variant='outline'>Button</Button>
    </div>
  )
}

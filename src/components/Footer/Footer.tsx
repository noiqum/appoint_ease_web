import React from 'react'
import Logo from '../Logo/logo'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer__content'>
        <div className='Footer__content__brand'>
          <Logo link={true}></Logo> <span>AppointEase</span>
        </div>
        <div className='Footer__content__text'>
          The simple and affordable way to book meetings online
        </div>
        <div className='Footer__content__social'></div>
      </div>
      <div className='Footer__links'></div>
    </footer>
  )
}

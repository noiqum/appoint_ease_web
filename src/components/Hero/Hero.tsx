import React from 'react'
import CustomTitle from '../Title/CustomTitle'
import heroImage from '../../assets/webp/main.webp'
import './Hero.scss'

export default function Hero() {
  return (
    <div className='Hero'>
      <div className='Hero__textside'>
        <CustomTitle
          level={1}
          nestedElement={<p>Seamless Appointment Management and Booking for Local Shops</p>}
        ></CustomTitle>
      </div>
      <div className='Hero__imageside'>
        <img src={heroImage} alt='hero section image' />
      </div>
    </div>
  )
}

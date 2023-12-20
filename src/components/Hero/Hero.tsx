import React from 'react'
import CustomTitle from '../Title/CustomTitle'
import heroImage from '../../assets/webp/main.webp'
import './Hero.scss'

export default function Hero() {
  const titleTextContent = (
    <p className=' text-themenavy text-4xl  lg:text-[40px] lg:text-left leading-normal'>
      Seamless <span className='text-themeblue'>Appointment</span> Management and Booking for{' '}
      <span className='text-themeblue'>Local Shops</span>
    </p>
  )
  return (
    <div className='Hero'>
      <div className='Hero__textside'>
        <CustomTitle level={1} nestedElement={titleTextContent}></CustomTitle>
        <p className=' text-lg sm:text-xl lg:text-xl text-themenavy font-semibold my-3'>
          Streamline your appointments effortlessly with our app – simplifying scheduling for local
          shops. No more complexities, just easy booking for a stress-free experience. Because
          managing your time should be as simple as a click.
        </p>
      </div>
      <div className='Hero__imageside'>
        <img src={heroImage} alt='hero section image' />
      </div>
    </div>
  )
}

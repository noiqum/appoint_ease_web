import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Transition from '../components/Transition/Transition'
import Hero from '../components/Hero/Hero'
import './HomePage.scss'
export default function HomePage() {
  return (
    <Transition>
      <div className='HomePage bg-lightgrey w-full h-screen overflow-hidden flex justify-center'>
        <Navigation />
        <Hero />
      </div>
    </Transition>
  )
}

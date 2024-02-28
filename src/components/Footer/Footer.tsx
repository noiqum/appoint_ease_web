import React from 'react'
import Logo from '../Logo/logo'
import facebookLogo from '../../assets/svg/facebook-logo-blue.svg'
import twitterLogo from '../../assets/svg/twitter-logo-blue.svg'
import './Footer.scss'
import instagramLogo from '../../assets/svg/instagram-logo-blue.svg'
import linkedinLogo from '../../assets/svg/linkedin-logo-blue.svg'

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
        <div
          onClick={(e) => {
            e.preventDefault()
          }}
          className='Footer__content__social'
        >
          <a href='#'>
            <span>
              <img src={facebookLogo} alt='facebook' />
            </span>
          </a>
          <a href='#'>
            <span>
              <img src={twitterLogo} alt='twitter' />
            </span>
          </a>
          <a href='#'>
            <span>
              <img src={instagramLogo} alt='instagram' />
            </span>
          </a>
          <a href='#'>
            <span>
              <img src={linkedinLogo} alt='linkedin' />
            </span>
          </a>
        </div>
      </div>
      <div className='Footer__links'></div>
    </footer>
  )
}

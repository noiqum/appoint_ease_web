import React from 'react'
import './logo.scss'
import LogoImage from '../../assets/svg/logo.svg'
import { useNavigate } from 'react-router-dom'

const Logo = React.memo(function Logo({ link }: { link?: boolean }) {
  const navigate = useNavigate()
  const homePageRedirect = () => {
    if (link) {
      navigate('/')
    }
  }

  return (
    <div onClick={homePageRedirect} className={link ? 'Logo link' : 'Logo'}>
      <img src={LogoImage} alt='AppointEaseLogo' />
    </div>
  )
})

export default Logo

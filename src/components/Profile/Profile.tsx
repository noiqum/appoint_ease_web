import { RootState } from '../../store/index'
import { useAppSelector } from '../../store/hooks'
import React from 'react'
import './Profile.scss'

function Profile() {
  const user = useAppSelector((state: RootState) => state.auth.user)
  return (
    <div className='Profile'>
      <div className='Profile__placeholder'>
        <span>{user?.name.charAt(0)}</span>
      </div>
      <div className='Profile__info'>
        <span>{user?.name}</span>
        <span>{user?.email}</span>
      </div>
    </div>
  )
}

export default Profile

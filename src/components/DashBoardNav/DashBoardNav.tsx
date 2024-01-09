import React from 'react'
import './DashBoardNav.scss'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import { Button } from '../Button/Button'
import ExternalLinkIcon from '../../assets/svg/external-link.svg'
import ShareLinkIcon from '../../assets/svg/share-link.svg'
import PlusIcon from '../../assets/svg/plus.svg'

export const DashBoardNav = () => {
  const user = useAppSelector((state: RootState) => state.auth.user)
  return (
    <div className='DashBoardNav'>
      <div className='DashBoardNav__title'>
        <span>
          Meet with <span className='capitalize'>{user?.name}</span>
        </span>
      </div>
      <div className='DashBoardNav__buttons'>
        <Button icon={ExternalLinkIcon} variant='outline' label='View Live'></Button>
        <Button icon={ShareLinkIcon} variant='outline' label='Share'></Button>
        <Button icon={PlusIcon} variant='green' label='Create New'></Button>
      </div>
    </div>
  )
}

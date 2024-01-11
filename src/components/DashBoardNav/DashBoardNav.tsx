import React from 'react'
import './DashBoardNav.scss'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import { Button } from '../Button/Button'
import ExternalLinkIcon from '../../assets/svg/external-link.svg'
import ShareLinkIcon from '../../assets/svg/share-link.svg'
import PlusIcon from '../../assets/svg/plus.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button icon={ShareLinkIcon} variant='outline' label='Share'></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
              <DropdownMenu.Item className='DropdownMenuItem'>Copy Link</DropdownMenu.Item>
              <DropdownMenu.Item className='DropdownMenuItem'>Share with Email</DropdownMenu.Item>
              <DropdownMenu.Separator></DropdownMenu.Separator>
              <div className='DropdownMenuSection'>Social</div>
              <DropdownMenu.Item className='DropdownMenuItem'>Facebook</DropdownMenu.Item>
              <DropdownMenu.Item className='DropdownMenuItem'>Twitter</DropdownMenu.Item>
              <DropdownMenu.Item className='DropdownMenuItem'>LinkedIn</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <Button icon={PlusIcon} variant='green' label='Create New'></Button>
      </div>
    </div>
  )
}

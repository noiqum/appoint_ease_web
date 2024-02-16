import React from 'react'
import './UpdateModal.scss'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import modalSlice from '../../store/modalSlice'
import * as Tabs from '@radix-ui/react-tabs'
export const UpdateModal = () => {
  const dispatch = useAppDispatch()
  const selectedAppointment = useAppSelector((state: RootState) => state.appointment.selected)
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className='UpdateModal'
    >
      <div className='UpdateModal__box'>
        <div className='UpdateModal__head'>
          <div className='UpdateModal__head__info'>
            <div className='UpdateModal__head__info__image'>
              <img src='' alt='' />
            </div>
            <div className='UpdateModal__head__info__name'>{selectedAppointment?.name}</div>
          </div>
          <div className='UpdateModal__head__btn'>
            <Button
              onClick={() => {
                dispatch(modalSlice.actions.setOpenStatus(false))
              }}
              variant='green'
              label='Save Changes'
            />
          </div>
        </div>
        <div className='UpdateModal__main'>
          <Tabs.Root defaultValue='general' className='UpdateModal__main__root'>
            <Tabs.List className='TabsList'>
              <Tabs.Trigger className='UpdateModal__main__tab' value='general'>
                General
              </Tabs.Trigger>
              <Tabs.Trigger className='UpdateModal__main__tab' value='availability'>
                Availability
              </Tabs.Trigger>
              <Tabs.Trigger className='UpdateModal__main__tab' value='notes'>
                Notes
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='UpdateModal__main__content' value='general'>
              General
            </Tabs.Content>
            <Tabs.Content className='UpdateModal__main__content' value='availability'>
              Availability
            </Tabs.Content>
            <Tabs.Content className='UpdateModal__main__content' value='notes'>
              Notes
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  )
}

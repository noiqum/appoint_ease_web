import React from 'react'
import './UpdateModal.scss'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import modalSlice from '../../store/modalSlice'
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
        <div className='UpdateModal__nav'></div>
        <div className='UpdateModal__footer'></div>
      </div>
    </div>
  )
}

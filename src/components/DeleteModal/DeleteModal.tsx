import React from 'react'
import './DeleteModal.scss'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import { deleteAppointment } from '../../Api/Services'
import modalSlice from '../../store/modalSlice'
import appointmentSlice from '../../store/appointmentSlice'
export const DeleteModal = () => {
  const selectedAppointment = useAppSelector((state: RootState) => state.appointment.selected)
  const appointmentList = useAppSelector((state: RootState) => state.appointment.list)
  const dispatch = useAppDispatch()

  const updateAppointmentList = () => {
    const newList = appointmentList.filter((item) => item._id !== selectedAppointment?._id)
    dispatch(appointmentSlice.actions.setAppointmentList(newList))
  }
  const deleteAppointmentCallback = () => {
    deleteAppointment(selectedAppointment?._id as string).then(() => {
      updateAppointmentList()
      dispatch(modalSlice.actions.setOpenStatus(false))
    })
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className='DeleteModal'
    >
      <div className='DeleteModal__box'>
        <div className='DeleteModal__content'>
          <p>{` Are you sure you want to delete ${selectedAppointment?.name}`}</p>
        </div>
        <div className='DeleteModal__footer'>
          <Button
            onClick={() => dispatch(modalSlice.actions.setOpenStatus(false))}
            variant='outline'
            label='Cancel'
          />
          <Button onClick={deleteAppointmentCallback} variant='destructive' label='Delete' />
        </div>
      </div>
    </div>
  )
}

import React, { useLayoutEffect } from 'react'
import { DashBoardNav } from '../DashBoardNav/DashBoardNav'
import './Appointments.scss'
import List from '../List/List'
import { getUserAppointments } from '../../Api/Services'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import appointmentSlice from '../../store/appointmentSlice'

function Appointments() {
  const user = useAppSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()
  useLayoutEffect(() => {
    getUserAppointments(user?._id as string).then((resp) => {
      if (resp.length > 0) {
        dispatch(appointmentSlice.actions.setAppointmentList(resp))
      }
    })
  }, [])
  return (
    <div className='Appointments'>
      <DashBoardNav />
      <List />
    </div>
  )
}

export default Appointments

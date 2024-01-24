import { RootState } from '../../store/index'
import { useAppSelector } from '../../store/hooks'
import React from 'react'
import AppointmentCard from '../AppointmentCard/AppointmentCard'

function List() {
  const AppointmentList = useAppSelector((state: RootState) => state.appointment.list)
  return (
    <div className='List'>
      {AppointmentList.map((appointment) => {
        return <AppointmentCard key={appointment._id} appointment={appointment}></AppointmentCard>
      })}
    </div>
  )
}

export default List

import { TAppointmentResponse } from '../../Api/ServiceType'
import React from 'react'
import './AppointmentCard.scss'

interface IAppointmentCardProps {
  appointment: TAppointmentResponse
}

function AppointmentCard({ appointment }: IAppointmentCardProps) {
  return (
    <div className='AppointmentCard'>
      <div className='AppointmentCard__info'>
        <div
          style={{ background: appointment.color }}
          className='AppointmentCard__info__circle'
        ></div>
        <div className='AppointmentCard__info__period'>
          <span>{appointment.length}</span>
          <span>{appointment.period}</span>
        </div>
        <div className='AppointmentCard__info__description'>
          <p>{appointment.description}</p>
        </div>
      </div>
      <div className='AppointmentCard__footer'>
        <div className='AppointmentCard__footer__share'>
          <p>Share</p>
        </div>
        <div className='AppointmentCard__footer__settings'>
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard

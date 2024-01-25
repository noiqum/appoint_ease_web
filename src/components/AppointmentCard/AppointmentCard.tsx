import { TAppointmentResponse } from '../../Api/ServiceType'
import React from 'react'
import './AppointmentCard.scss'
import ClockIcon from '../../assets/svg/clock.svg'

interface IAppointmentCardProps {
  appointment: TAppointmentResponse
}

function AppointmentCard({ appointment }: IAppointmentCardProps) {
  return (
    <div className='AppointmentCard'>
      <div className='AppointmentCard__info'>
        <div className='AppointmentCard__info__title'>
          <div
            style={{ background: appointment.color }}
            className='AppointmentCard__info__circle'
          ></div>
          <span>{appointment.name}</span>
        </div>

        <div className='AppointmentCard__info__period'>
          <span>
            <img src={ClockIcon} alt='' />
          </span>
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

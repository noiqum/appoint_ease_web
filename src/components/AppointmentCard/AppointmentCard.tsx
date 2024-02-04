import { TAppointmentResponse } from '../../Api/ServiceType'
import React from 'react'
import './AppointmentCard.scss'
import ClockIcon from '../../assets/svg/clock.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from '../Button/Button'
import More from '../../assets/svg/more-horizontal.svg'
import Edit from '../../assets/svg/edit.svg'
import Delete from '../../assets/svg/delete.svg'
import ExternalLink from '../../assets/svg/external-black.svg'
import { useAppDispatch } from '../../store/hooks'
import { setSelectedAppointment } from '../../store/appointmentSlice'
import { setModalElement, setOpenStatus } from '../../store/modalSlice'
import { DeleteModal } from '../DeleteModal/DeleteModal'
import { UpdateModal } from '../UpdateModal/UpdateModal'

interface IAppointmentCardProps {
  appointment: TAppointmentResponse
}

function AppointmentCard({ appointment }: IAppointmentCardProps) {
  const dispatch = useAppDispatch()
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button icon={More} variant='outline' label=''></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
                <DropdownMenu.Item
                  onClick={() => {
                    dispatch(setSelectedAppointment(appointment))
                    dispatch(setOpenStatus(true))
                    dispatch(setModalElement(<UpdateModal />))
                  }}
                  className='DropdownMenuItem'
                >
                  <span className='mr-2'>
                    <img src={Edit} alt='edit' />
                  </span>
                  Edit
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className='DropdownMenuItem'
                  onClick={() => {
                    dispatch(setSelectedAppointment(appointment))
                    dispatch(setOpenStatus(true))
                    dispatch(setModalElement(<DeleteModal />))
                  }}
                >
                  <span className='mr-2'>
                    <img src={Delete} alt='delete' />
                  </span>
                  Delete
                </DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>
                  <span className='mr-2'>
                    <img src={ExternalLink} alt='new page link' />
                  </span>
                  View Live Page
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard

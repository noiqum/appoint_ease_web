import React from 'react'
import './UpdateModal.scss'
import { Button } from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/index'
import modalSlice from '../../store/modalSlice'
import * as Tabs from '@radix-ui/react-tabs'
import { Label } from '../Label/Label'
import { Input } from '../Input/Input'
import { Textarea } from '../TextArea/TextArea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select/Select'

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
              <Label>Appointment Name</Label>
              <Input value={selectedAppointment?.name}></Input>
              <Label>Description</Label>
              <Textarea value={selectedAppointment?.description}></Textarea>
              <Label>Length</Label>
              <div>
                <Input type='number' value={selectedAppointment?.length}></Input>
                <Select>
                  <SelectTrigger className='SelectTrigger'>
                    <SelectValue
                      className='SelectValue'
                      placeholder={selectedAppointment?.period}
                    ></SelectValue>
                  </SelectTrigger>
                  <SelectContent className='SelectContent'>
                    <SelectItem className='SelectItem' value='hour'>
                      Hour
                    </SelectItem>
                    <SelectItem className='SelectItem' value='min'>
                      Min
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

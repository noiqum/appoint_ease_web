import React, { useState } from 'react'
import X from '../../assets/svg/x.svg'
import NewAppointmentVisual from '../../assets/svg/new-one.svg'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../Form/Form'
import { Button } from '../Button/Button'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../Input/Input'
import './AppointmentModal.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import modalSlice from '../../store/modalSlice'
import { RootState } from '../../store/index'
import { TAppointmentRequest } from '../../Api/ServiceType'
import { createAppointment } from '../../Api/Services'

const formSchema = z.object({
  name: z
    .string()
    .min(5, 'Appointment name must be at least 5 characters')
    .max(50, 'Appointment name cannot exceed 50 characters')
    .nonempty('Appointment name is required'),
})
export const AppointmentModal = () => {
  const [serviceCallProcess, setProcess] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const user = useAppSelector((state: RootState) => state.auth.user)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const name = values.name
    const appointment: TAppointmentRequest = {
      name,
      description: '',
      link: '',
      length: 30,
      period: 'min',
      color: '#1e9bff',
      user: user?._id || '',
    }
    try {
      setProcess(true)
      const newAppointment = await createAppointment(appointment).then((res) => res)
      if (newAppointment) {
        dispatch(modalSlice.actions.setOpenStatus(false))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setProcess(false)
    }
  }

  return (
    <div className='AppointmentModal'>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className='AppointmentModal__box'
      >
        <span
          onClick={() => dispatch(modalSlice.actions.setOpenStatus(false))}
          className='AppointmentModal__closeIcon'
        >
          <img src={X} alt='close_modal_icon' />
        </span>
        <div className='AppointmentModal__image'>
          <img src={NewAppointmentVisual} alt='' />
        </div>
        <div className='AppointmentModal__text'>
          <h2>New Appointment</h2>
          <p>
            Meeting types are the services that people want to schedule you for. They will appear on
            your scheduling page, and have a direct link you can share.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input autoFocus placeholder='Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {serviceCallProcess ? (
                <Button
                  loader={true}
                  variant='green'
                  label='Create New Appointment'
                  disabled
                ></Button>
              ) : (
                <Button variant='green' label='Create New Appointment' type='submit'>
                  Submit
                </Button>
              )}
            </form>
          </Form>
          <label htmlFor='appointment-name'></label>
        </div>
      </div>
    </div>
  )
}

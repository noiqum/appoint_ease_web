import React from 'react'
import X from '../../assets/svg/x.svg'
import NewAppointmentVisual from '../../assets/svg/new-one.svg'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../Form/Form'
import { Button } from '../Button/Button'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../Input/Input'

const formSchema = z.object({
  name: z
    .string()
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email cannot exceed 50 characters')
    .nonempty('Email is required'),
})
export const AppointmentModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className='AppointmentModal'>
      <span className='AppointModal__closeIcon'>
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
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant='green' label='Create New Appointment' type='submit'>
              Submit
            </Button>
          </form>
        </Form>
        <label htmlFor='appointment-name'></label>
      </div>
    </div>
  )
}

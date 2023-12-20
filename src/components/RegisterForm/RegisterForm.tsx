import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../Form/Form'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { authActions } from '../../store/authSlice'
import { register } from '../../Api/Services'
import { useAppDispatch } from '../../store/hooks'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name cannot exceed 15 characters')
    .nonempty('Name is required'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(50, 'Email cannot exceed 50 characters')
    .nonempty('Email is required'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password cannot exceed 50 characters')
    .nonempty('Password is required'),
})

export function RegisterForm() {
  const dispatch = useAppDispatch()
  const [registerServiceCallProcess, setProcess] = useState<boolean>(false)
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setProcess(true)
    const user = await register({
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((res) => res)
      .catch((err) => console.log(err))
      .finally(() => setProcess(false))

    if (user) {
      dispatch(authActions.setUser(user))
      dispatch(authActions.setLogin(true))
      navigate('/dashboard')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className={registerServiceCallProcess ? 'loader active' : 'loader'}></div>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Password' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={registerServiceCallProcess} type='submit' label='Sign Up'></Button>
        <div className='w-full flex my-1 justify-end items-center'>
          Already have an Account ?
          <Link className='text-lg font-semibold underline ml-1' to={'/login'}>
            Log In
          </Link>
        </div>
      </form>
    </Form>
  )
}

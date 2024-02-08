import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../Form/Form'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { authActions } from '../../store/authSlice'
import { login } from '../../Api/Services'
import { useAppDispatch } from '../../store/hooks'
import { useState } from 'react'
import './LoginForm.scss'
import { Link, useNavigate } from 'react-router-dom'

const formSchema = z.object({
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

export function LoginForm() {
  const dispatch = useAppDispatch()
  const [loginServiceCallProcess, setProcess] = useState<boolean>(false)
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setProcess(true)
    const user = await login({
      email: values.email,
      password: values.password,
    })
      .then((res) => res)
      .catch((err) => console.error(err))
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
        <div className={loginServiceCallProcess ? 'loader active' : 'loader'}></div>
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

        <Button disabled={loginServiceCallProcess} type='submit' label='Sign In'></Button>
        <div className='w-full flex my-1 justify-end items-center'>
          Need An Account ?
          <Link className=' text-lg font-semibold underline ml-1' to={'/register'}>
            Register
          </Link>
        </div>
      </form>
    </Form>
  )
}

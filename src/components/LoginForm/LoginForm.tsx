import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../Form/Form'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { useAppDispatch } from '../../store/hooks'
import { authActions } from '../../store/authSlice'
import { login } from '../../Api/Services'

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
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const user = await login({
      email: values.email,
      password: values.password,
    })
      .then((res) => res)
      .catch((err) => console.log(err))

    if (user) {
      dispatch(authActions.setUser(user))
      dispatch(authActions.setLogin(true))
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
        <Button type='submit' label='Sign In'></Button>
      </form>
    </Form>
  )
}

import React from 'react'
import { LoginForm } from './LoginForm'
import { renderWithProviders } from '../../test-utils'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/index'
import DashBoardPage from '../../pages/DashBoardPage'

// mock useNavigate
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
}))

describe('LoginForm', () => {
  it('renders Email Label', () => {
    const { getByLabelText } = renderWithProviders(<LoginForm></LoginForm>)
    const emailLabel = getByLabelText('Email')
    expect(emailLabel).toBeInTheDocument()
  })
  it('renders Email Input', () => {
    const { getByPlaceholderText } = renderWithProviders(<LoginForm></LoginForm>)
    const emailInput = getByPlaceholderText('Email')
    expect(emailInput).toBeInTheDocument()
  })
  it('renders Password Label', () => {
    const { getByLabelText } = renderWithProviders(<LoginForm></LoginForm>)
    const passwordLabel = getByLabelText('Password')
    expect(passwordLabel).toBeInTheDocument()
  })
  it('renders password input', () => {
    const { getByPlaceholderText } = renderWithProviders(<LoginForm></LoginForm>)
    const passwordInput = getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()
  })
  it('renders Sign In button', () => {
    const { getByText } = renderWithProviders(<LoginForm></LoginForm>)
    const signInButton = getByText('Sign In')
    expect(signInButton).toBeInTheDocument()
  })
  it('renders email error when invalid email enter', async () => {
    const { getByPlaceholderText, getByText, findByText } = renderWithProviders(
      <LoginForm></LoginForm>,
    )
    const emailInput = getByPlaceholderText('Email')
    fireEvent.change(emailInput, { target: { value: 'invalid email' } })
    const signInButton = getByText('Sign In')
    fireEvent.click(signInButton)
    const emailError = await findByText('Please enter a valid email address')
    expect(emailError).toBeInTheDocument()
  })
  it('renders password error when password length less than 8 char', async () => {
    const { getByPlaceholderText, getByText, findByText } = renderWithProviders(
      <LoginForm></LoginForm>,
    )
    const passwordInput = getByPlaceholderText('Password')
    const signInButton = getByText('Sign In')
    fireEvent.change(passwordInput, { target: { value: '1234' } })
    fireEvent.click(signInButton)
    const passwordError = await findByText('Password must be at least 8 characters')
    expect(passwordError).toBeInTheDocument()
  })
  it('update loader process background animation while login service call processing', async () => {
    const { container, getByText, getByPlaceholderText } = renderWithProviders(
      <LoginForm></LoginForm>,
    )
    const signInButton = getByText('Sign In')
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')

    expect(container.querySelector('.loader')).toBeInTheDocument()
    expect(container.querySelector('.loader.active')).toBeNull()

    fireEvent.change(emailInput, { target: { value: 'mike@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'test1234' } })
    fireEvent.click(signInButton)

    await waitFor(() => {
      expect(container.querySelector('.loader.active')).toBeInTheDocument()
    })
  })
  it('render register link', () => {
    const { getByText } = renderWithProviders(<LoginForm />)
    const registerDirectLink = getByText('Register')
    expect(registerDirectLink).toBeInTheDocument()
  })
  it('redirects to register path if user clicks register link', async () => {
    render(
      <Provider store={setupStore({})}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/register' Component={RegisterPage}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    )
    fireEvent.click(screen.getByText('Register'))
    await waitFor(() => {
      expect(screen.getByText('Sign up for AppointEase')).toBeInTheDocument()
    })
  })
  it('redirect to /dashboard after successful login ', async () => {
    render(
      <Provider store={setupStore({})}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/dashboard' Component={DashBoardPage}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    )

    const signInButton = screen.getByText('Sign In')
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')

    fireEvent.change(emailInput, { target: { value: 'mike@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'test1234' } })
    fireEvent.click(signInButton)

    await waitFor(() => {
      expect(screen.getByText('Sign in to')).toBeInTheDocument()
    })
  })
})

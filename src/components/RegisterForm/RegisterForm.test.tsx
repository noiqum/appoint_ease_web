import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import { RegisterForm } from './RegisterForm'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import RegisterPage from '../../pages/RegisterPage'
import { setupStore } from '../../store'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
}))

describe('Register Form', () => {
  it('renders name label', () => {
    const { getByLabelText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const nameLabel = getByLabelText('Name')
    expect(nameLabel).toBeInTheDocument()
  })
  it('render name input', () => {
    const { getByPlaceholderText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const nameInput = getByPlaceholderText('Name')
    expect(nameInput).toBeInTheDocument()
  })
  it('renders Email Label', () => {
    const { getByLabelText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const emailLabel = getByLabelText('Email')
    expect(emailLabel).toBeInTheDocument()
  })
  it('renders Email Input', () => {
    const { getByPlaceholderText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const emailInput = getByPlaceholderText('Email')
    expect(emailInput).toBeInTheDocument()
  })
  it('renders Password Label', () => {
    const { getByLabelText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const passwordLabel = getByLabelText('Password')
    expect(passwordLabel).toBeInTheDocument()
  })
  it('renders password input', () => {
    const { getByPlaceholderText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const passwordInput = getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()
  })
  it('renders Sign Un button', () => {
    const { getByText } = renderWithProviders(<RegisterForm></RegisterForm>)
    const signInButton = getByText('Sign Up')
    expect(signInButton).toBeInTheDocument()
  })
  it('renders name error when name value empty or name is less than 3 chars', async () => {
    const { getByPlaceholderText, getByText, findByText } = renderWithProviders(
      <RegisterForm></RegisterForm>,
    )
    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'a' } })
    const signUpButton = getByText('Sign Up')
    fireEvent.click(signUpButton)
    const nameError = await findByText('Name must be at least 3 characters')
    expect(nameError).toBeInTheDocument()
  })
  it('renders email error when invalid email enter', async () => {
    const { getByPlaceholderText, getByText, findByText } = renderWithProviders(
      <RegisterForm></RegisterForm>,
    )
    const emailInput = getByPlaceholderText('Email')
    fireEvent.change(emailInput, { target: { value: 'invalid email' } })
    const signUpButton = getByText('Sign Up')
    fireEvent.click(signUpButton)
    const emailError = await findByText('Please enter a valid email address')
    expect(emailError).toBeInTheDocument()
  })
  it('renders password error when password length less than 8 char', async () => {
    const { getByPlaceholderText, getByText, findByText } = renderWithProviders(
      <RegisterForm></RegisterForm>,
    )
    const passwordInput = getByPlaceholderText('Password')
    const signUpButton = getByText('Sign Up')
    fireEvent.change(passwordInput, { target: { value: '1234' } })
    fireEvent.click(signUpButton)
    const passwordError = await findByText('Password must be at least 8 characters')
    expect(passwordError).toBeInTheDocument()
  })
  it('update loader process background animation while register service call processing', async () => {
    const { container, getByText, getByPlaceholderText } = renderWithProviders(
      <RegisterForm></RegisterForm>,
    )
    const signUpButton = getByText('Sign Up')
    const nameInput = getByPlaceholderText('Name')
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')

    expect(container.querySelector('.loader')).toBeInTheDocument()
    expect(container.querySelector('.loader.active')).toBeNull()

    fireEvent.change(emailInput, { target: { value: 'mike@gmail.com' } })
    fireEvent.change(nameInput, { target: { value: 'mike' } })
    fireEvent.change(passwordInput, { target: { value: 'test1234' } })
    fireEvent.click(signUpButton)

    await waitFor(() => {
      expect(container.querySelector('.loader.active')).toBeInTheDocument()
    })
  })
  it('redirects to login path if user clicks login link', async () => {
    render(
      <Provider store={setupStore({})}>
        <MemoryRouter initialEntries={['/register']}>
          <Routes>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/register' Component={RegisterPage}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    )
    fireEvent.click(screen.getByText('Log In'))
    await waitFor(() => {
      expect(screen.getByText('Sign in to')).toBeInTheDocument()
    })
  })
})

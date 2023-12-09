import React from 'react'
import { LoginForm } from './LoginForm'
import { renderWithProviders } from '../../test-utils'
import { fireEvent } from '@testing-library/react'

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
})

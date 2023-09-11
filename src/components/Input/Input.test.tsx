import * as userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Input } from './Input'
describe('Input Component', () => {
  test('render correctly', () => {
    render(<Input data-testid='test-input' className='test-input'></Input>)
    const inputElement = screen.getByTestId('test-input')
    expect(inputElement).toHaveClass('test-input')
  })
  test('render type value correctly', () => {
    render(<Input data-testid='test-input' className='test-input'></Input>)
    const inputElement: HTMLInputElement = screen.getByTestId('test-input')

    // Log the current value to help diagnose any issues
    console.log('Current input value:', inputElement.value)

    // Simulate user input
    userEvent.default.type(inputElement, '5')

    // Log the updated value to help diagnose any issues
    console.log('Updated input value:', inputElement.value)

    expect(inputElement).toHaveValue('5')
  })
})

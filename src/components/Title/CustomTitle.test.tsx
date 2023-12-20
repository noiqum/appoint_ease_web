import { render } from '@testing-library/react'
import CustomTitle from './CustomTitle'
import React from 'react'

describe('Custom Title', () => {
  it('Render text content prop properly', () => {
    const TextElement = (text: string) => {
      return <p>{text}</p>
    }
    const titleElement = TextElement('test title')
    const { getByText } = render(<CustomTitle level={1} nestedElement={titleElement}></CustomTitle>)
    expect(getByText('test title')).toBeInTheDocument()
  })
  it('Render nested child level of h tag  properly', () => {
    const TextElement = (text: string) => {
      return <p>{text}</p>
    }
    const titleElement = TextElement('test title')
    const { getByRole } = render(<CustomTitle level={1} nestedElement={titleElement}></CustomTitle>)
    const CustomTitleRendered = getByRole('heading', { level: 1 })
    expect(CustomTitleRendered).toBeInTheDocument()
  })
})

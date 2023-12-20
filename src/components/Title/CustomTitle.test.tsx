import { render } from '@testing-library/react'
import CustomTitle from './CustomTitle'
import React from 'react'

describe('Custom Title', () => {
  it('Render level and text content prop properly', () => {
    const TextElement = (text: string) => {
      return <p>{text}</p>
    }
    const titleElement = TextElement('test title')
    render(<CustomTitle level={1} nestedElement={titleElement}></CustomTitle>)
  })
})

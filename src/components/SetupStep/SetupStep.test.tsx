import { render } from '@testing-library/react'
import SetupStep from './SetupStep'

describe('SetupStep', () => {
  it('renders number of the step according to prop pass into StepupStep component', () => {
    const { getByText } = render(<SetupStep step={1}></SetupStep>)
    const stepNumberDisplayElement = getByText(1)
    expect(stepNumberDisplayElement.className).toBe('SetupStep__box__step')
  })
})

import { fireEvent, render } from '@testing-library/react'
import Logo from './logo'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalModule = jest.requireActual('react-router-dom') as any

  return {
    ...originalModule,
    useNavigate: () => mockUseNavigate,
  }
})
describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />)
    expect(baseElement).toBeTruthy()
  })
  it('should redirect homepage with link prop true', () => {
    const { baseElement } = render(<Logo link={true} />)
    fireEvent.click(baseElement.querySelector('.Logo.link') as HTMLElement)
    expect(mockUseNavigate).toHaveBeenCalledWith('/')
  })
  it('should not redirect homepage with link prop false', () => {
    const { baseElement } = render(<Logo link={false} />)
    fireEvent.click(baseElement.querySelector('.Logo') as HTMLElement)
    expect(mockUseNavigate).not.toHaveBeenCalled()
  })
})

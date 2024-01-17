import { ModalWrapper } from './ModalWrapper'
import { renderWithProviders } from '../../test-utils'

describe('ModalWrapper', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<ModalWrapper />)
    expect(asFragment()).toMatchSnapshot()
  })
})

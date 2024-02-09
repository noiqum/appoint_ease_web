import { render } from '@testing-library/react'
import { DeleteModal } from './DeleteModal'
import { Provider } from 'react-redux'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'
import { setupStore } from '../../store'
import { TinitialModalState } from '../../store/modalSlice'

describe('DeleteModal', () => {
  it('should render', () => {
    const initialState: TinitialModalState = {
      isOpen: true,
      modalElement: <DeleteModal></DeleteModal>,
    }
    render(
      <Provider store={setupStore({ modal: initialState })}>
        <ModalWrapper></ModalWrapper>
      </Provider>,
    )
    const deleteModal = document.querySelector('.DeleteModal')
    expect(deleteModal).toBeInTheDocument()
  })
})

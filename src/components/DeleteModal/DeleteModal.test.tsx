import { render } from '@testing-library/react'
import { DeleteModal } from './DeleteModal'
import { Provider } from 'react-redux'
import { ModalWrapper } from '../ModalWrapper/ModalWrapper'
import { setupStore } from '../../store'
import { TinitialModalState } from '../../store/modalSlice'
import { TAppointmentResponse } from '@/src/Api/ServiceType'
import { TinitialAppointmentState } from '@/src/store/appointmentSlice'

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
  it('should render selected appointment name', () => {
    const initialState: TinitialModalState = {
      isOpen: true,
      modalElement: <DeleteModal></DeleteModal>,
    }
    const selectedAppointment: TAppointmentResponse = {
      _id: '1',
      name: 'test',
      link: 'test-link',
      user: 'test-user',
      description: 'test-description',
      length: 1,
      period: 'hour',
      color: '#009432',
      createdAt: '2022-01-01T00:00:00.000Z',
      updatedAt: '2022-01-01T00:00:00.000Z',
      __v: 0,
    }
    const appointmentInitialState: TinitialAppointmentState = {
      list: [selectedAppointment],
      selected: selectedAppointment,
    }
    render(
      <Provider store={setupStore({ modal: initialState, appointment: appointmentInitialState })}>
        <ModalWrapper></ModalWrapper>
      </Provider>,
    )
    const deleteModal = document.querySelector('.DeleteModal__content')
    expect(deleteModal).toHaveTextContent(
      `Are you sure you want to delete ${selectedAppointment.name}`,
    )
  })
})

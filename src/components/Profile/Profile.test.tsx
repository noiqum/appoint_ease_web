import { render } from '@testing-library/react'
import Profile from './Profile'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/index'
import { TloginResponse } from '@/src/Api/ServiceType'

describe('profile', () => {
  it('renders first letter of name inside image placeholder', () => {
    const { container } = render(
      <Provider
        store={setupStore({
          auth: {
            user: {
              name: 'test',
              email: 'test@gmail.com',
              _id: '1234',
              createdAt: '',
              updatedAt: '',
              __v: 1,
            },
            isLogin: true,
          },
        })}
      >
        <Profile></Profile>
      </Provider>,
    )
    const ProfilePlaceholder = container.querySelector('.Profile__placeholder')
    expect(ProfilePlaceholder?.textContent).toEqual('t')
  })
  it('renders user info (email & name)', () => {
    const { getByText } = render(
      <Provider
        store={setupStore({
          auth: {
            user: {
              name: 'test',
              email: 'test@gmail.com',
            } as TloginResponse,
            isLogin: true,
          },
        })}
      >
        <Profile></Profile>
      </Provider>,
    )
    const nameDisplayElement = getByText('test')
    const emailDisplayElement = getByText('test@gmail.com')

    expect(nameDisplayElement).toBeInTheDocument()
    expect(emailDisplayElement).toBeInTheDocument()
  })
})

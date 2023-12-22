import { TloginResponse } from '../../Api/ServiceType'

import HomePage from '../../pages/HomePage'

import { setupStore } from '../../store'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

describe('hero', () => {
  it('cta button redirect to dashboard if user logged in', async () => {
    render(
      <Provider
        store={setupStore({
          auth: {
            isLogin: true,
            user: {} as TloginResponse,
          },
        })}
      >
        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>
      </Provider>,
    )
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/dashboard')
    })
  })
  it('redirects to login page when logout user click cta button', async () => {
    render(
      <Provider
        store={setupStore({
          auth: {
            user: null,
            isLogin: false,
          },
        })}
      >
        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>
      </Provider>,
    )
    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/login')
    })
  })
})

import { renderWithProviders } from '../../test-utils'
import React from 'react'
import Navigation from './Navigation'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/index'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import DashBoardPage from '../../pages/DashBoardPage'
import HomePage from '../../pages/HomePage'

describe('Navigation', () => {
  it('renders without crashing', () => {
    expect(() => {
      const { container } = renderWithProviders(<Navigation />)
      expect(container).toBeTruthy()
    }).not.toThrow()
  })
  it('renders logo', () => {
    const { getByText } = renderWithProviders(<Navigation />)
    const logoText = getByText('Appointment Ease')
    expect(logoText).toBeInTheDocument()
  })
  it('render login link if user is not logged in', () => {
    render(
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
              accessToken: '',
            },
            isLogin: false,
          },
        })}
      >
        <MemoryRouter>
          <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/dashboard' Component={DashBoardPage}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    )
    const loginLink = screen.getAllByText('Login')
    expect(loginLink[0]).toBeInTheDocument()
  })
  it('render logout link if user is logged in', () => {
    render(
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
              accessToken: '',
            },
            isLogin: true,
          },
        })}
      >
        <MemoryRouter>
          <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/dashboard' Component={DashBoardPage}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>,
    )
    const logoutLink = screen.getAllByText('Logout')
    expect(logoutLink[0]).toBeInTheDocument()
  })
})

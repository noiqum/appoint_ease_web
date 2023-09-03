import React from 'react'
import { render, screen } from '@testing-library/react'

import { MemoryRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const renderWithRouter = (component: React.ComponentType, route: string) => {
  window.history.pushState({}, 'Login Page', route)
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={route} Component={component} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('routes', () => {
  it('should render successfully loginpage with /login ', () => {
    renderWithRouter(LoginPage, '/login')
    expect(screen.getByTestId('LoginPage')).toBeInTheDocument()
  })
})

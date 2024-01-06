import React from 'react'
import { renderWithProviders } from '../../test-utils'
import SideMenuLink, { PathEnum } from './SideMenuLink'

describe('SideMenuLink', () => {
  it('should render', () => {
    renderWithProviders(<SideMenuLink path={PathEnum.appointment} />)
    expect(document.querySelector('.SideMenuLink')).toBeTruthy()
  })

  it('should navigate to given path', () => {
    const { getByText } = renderWithProviders(<SideMenuLink path={PathEnum.appointment} />)
    getByText('appointments').click()
    expect(window.location.pathname).toBe('/dashboard/appointments')
  })
})

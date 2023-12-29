import React from 'react'
import Transition from '../components/Transition/Transition'
import SideMenu from '../components/SideMenu/SideMenu'
import useWindowSize from '../hooks/useWindowSize'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { RootState } from '../store'
import { sideMenuActions } from '../store/sideMenuSlice'
import MenuIcon from '../assets/svg/menu.svg'
import './DashBoardPage.scss'
import { Outlet } from 'react-router-dom'

function DashBoardPage() {
  const { width } = useWindowSize()
  const isOpen = useAppSelector((state: RootState) => state.sidemenu.isOpen)
  const dispatch = useAppDispatch()

  function sidemenuCloseAction() {
    dispatch(sideMenuActions.setOpenStatus(false))
  }

  function sidemenuOpenAction() {
    dispatch(sideMenuActions.setOpenStatus(true))
  }
  return (
    <Transition>
      <div className='DashBoardPage' data-testid='DashBoardPage'>
        <SideMenu isOpen={width >= 768 ? true : isOpen}></SideMenu>
        <div className='DashBoardPage__main'>
          <Outlet></Outlet>
        </div>
        <div
          onClick={sidemenuCloseAction}
          className={`DashBoardPage__cover ${isOpen ? 'open' : 'close'}`}
        ></div>
        <div onClick={sidemenuOpenAction} className='DashBoardPage__sidemenuToggle'>
          <img src={MenuIcon} alt='sidemenu toggle icon' />
        </div>
      </div>
    </Transition>
  )
}

export default DashBoardPage

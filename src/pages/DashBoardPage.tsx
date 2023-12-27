import React from 'react'
import Transition from '../components/Transition/Transition'
import SideMenu from '../components/SideMenu/SideMenu'

function DashBoardPage() {
  return (
    <Transition>
      <div className='DashBoardPage' data-testid='DashBoardPage'>
        <SideMenu></SideMenu>
      </div>
    </Transition>
  )
}

export default DashBoardPage

import React from 'react'
import './SetupSection.scss'
import CustomTitle from '../Title/CustomTitle'

function SetupSection() {
  const titleElement = <p>Quick to setup and even easier to share</p>
  return (
    <div className='SetupSection'>
      <CustomTitle level={2} nestedElement={titleElement}></CustomTitle>
    </div>
  )
}

export default SetupSection

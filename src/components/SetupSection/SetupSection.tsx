import React from 'react'
import './SetupSection.scss'
import CustomTitle from '../Title/CustomTitle'
import SetupStep from '../SetupStep/SetupStep'

function SetupSection() {
  const titleElement = <p>Quick to setup and even easier to share</p>
  return (
    <div className='SetupSection'>
      <CustomTitle level={2} nestedElement={titleElement}></CustomTitle>
      <div className='SetupSection__steps'>
        <SetupStep step={1}></SetupStep>
        <SetupStep step={2}></SetupStep>
        <SetupStep step={3}></SetupStep>
      </div>
    </div>
  )
}

export default SetupSection

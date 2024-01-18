import React from 'react'

import './BouncingDotLoader.scss'

interface IBouncingDotLoader {
  color: string
}

const BouncingDotLoader = ({ color }: IBouncingDotLoader) => {
  return (
    <div className='bouncing-dot-loader'>
      <div style={{ background: color }} className='dot'></div>
      <div style={{ background: color }} className='dot'></div>
      <div style={{ background: color }} className='dot'></div>
    </div>
  )
}

export default BouncingDotLoader

import { motion } from 'framer-motion'
import React from 'react'
import './Transition.scss'

interface ITransitionProps {
  children: React.ReactNode
}

const Transition = ({ children }: ITransitionProps) => {
  return (
    <>
      {children}
      <motion.div
        className='slide-in'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className='slide-out'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  )
}

export default Transition

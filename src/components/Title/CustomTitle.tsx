import React, { JSX } from 'react'
import './CustomTitle.scss'

export interface CustomTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  nestedElement: JSX.Element
}

const CustomTitle: React.FC<CustomTitleProps> = ({ level, nestedElement }) => {
  const validatedLevel = Math.min(Math.max(level, 1), 6)

  const HeadingTag = `h${validatedLevel}` as keyof JSX.IntrinsicElements

  return <HeadingTag className={`Title ${HeadingTag}`}>{nestedElement}</HeadingTag>
}

export default CustomTitle

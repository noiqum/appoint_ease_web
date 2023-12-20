import React, { ReactNode } from 'react'

interface CustomTitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

const CustomTitle: React.FC<CustomTitleProps> = ({ level, children }) => {
  const validatedLevel = Math.min(Math.max(level, 1), 6)

  const HeadingTag = `h${validatedLevel}` as keyof JSX.IntrinsicElements

  return <HeadingTag>{children}</HeadingTag>
}

export default CustomTitle

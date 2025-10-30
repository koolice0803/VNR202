import React from 'react'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

const sizeClass = {
  sm: 'uniform-logo',
  md: 'uniform-logo',
  lg: 'uniform-logo uniform-logo--lg'
}

const Logo: React.FC<LogoProps> = ({ size = 'md', rounded = false, className = '', ...rest }) => {
  const classes = `${sizeClass[size]} ${rounded ? 'uniform-logo--rounded' : ''} ${className}`.trim()
  return <img className={classes} {...rest} />
}

export default Logo

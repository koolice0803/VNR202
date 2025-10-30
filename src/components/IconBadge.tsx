import React from 'react'

type IconProps = {
  Icon: React.ElementType
  size?: 'sm' | 'md' | 'lg'
  className?: string
  gradient?: string
}

const sizeMap = {
  sm: { container: 'w-8 h-8', icon: 'w-4 h-4' },
  md: { container: 'w-10 h-10', icon: 'w-5 h-5' },
  lg: { container: 'w-12 h-12', icon: 'w-6 h-6' },
}

const IconBadge: React.FC<IconProps> = ({ Icon, size = 'md', className = '', gradient = 'from-gray-500 to-gray-600' }) => {
  const sizes = sizeMap[size]

  return (
    <div className={`rounded-lg flex items-center justify-center shadow-md ${sizes.container} bg-gradient-to-br ${gradient} ${className}`}>
      <Icon className={`${sizes.icon} text-white`} />
    </div>
  )
}

export default IconBadge

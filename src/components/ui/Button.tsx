import React from 'react'
import { cn } from '@/libs/utils/twMerge'

interface ButtonProps {
  text?: string
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  text = 'Explore Music',
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'border border-[#FFFFFF] hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent w-full h-[50px] text-[16px] text-white leading-[22.4px]',
        className,
      )}
      onClick={onClick}
    >
      {children || text}
    </button>
  )
}

export default Button

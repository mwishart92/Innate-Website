import React from 'react'
import { cn } from '@/libs/utils/twMerge'
import { trackButtonClick } from '@/utils/gtm'

interface ButtonProps {
  text?: string
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  buttonName?: string
  buttonData?: Record<string, any>
}

const Button: React.FC<ButtonProps> = ({
  text = 'Explore Music',
  children,
  className,
  onClick,
  buttonName = 'generic_button',
  buttonData = {},
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    trackButtonClick(buttonName, {
      button_text: children || text,
      ...buttonData,
    })
    
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={cn(
        'border border-[#FFFFFF] hover:bg-white hover:text-black hover:border-black transition duration-300 bg-transparent w-full h-[50px] text-[16px] text-white leading-[22.4px]',
        className,
      )}
      onClick={handleClick}
    >
      {children || text}
    </button>
  )
}

export default Button

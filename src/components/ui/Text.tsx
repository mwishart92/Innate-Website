import React, { forwardRef } from 'react'

import { cn } from '@/libs/utils/twMerge'

interface Props {
  children: React.ReactNode
  className?: string
  as?: string
  onClick?: (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => void
  id?: string
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick, id = '' } = props

    if (as === 'h1') {
      return (
        <h1
          ref={ref}
          className={cn(
            'font-semibold  text-[48px] leading-[52.8px] text-[#FFFFFF] font-inter   ',
            className,
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      )
    }

    if (as === 'h2') {
      return (
        <h2
          ref={ref}
          className={cn(
            'font-semibold font-inter text-[35px] leading-[49px] text-[#FFFFFF] mob:text-[23.71px]',
            className,
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      )
    }

    return (
      <p
        ref={ref}
        className={cn(
          '   text-[#D9D9D9] text-[16px] font-light leading-[24px] font-inter  ',
          className,
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    )
  },
)

Text.displayName = 'Text'

export default Text

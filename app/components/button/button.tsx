import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import s from './button.module.scss'

const Button: FC<{
  children: ReactNode | string
  outline?: boolean
  main?: boolean
  style?: Record<string, string | number>
}> = ({ children, outline, main, style = {} }) => {
  return (
    <div
      className={clsx(s.button, {
        [s['button-outline']]: outline,
        [s['button-main']]: main,
      })}
      style={style}
    >
      {children}
    </div>
  )
}

export default Button

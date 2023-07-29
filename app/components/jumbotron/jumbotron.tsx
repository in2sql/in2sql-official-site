import React, { FC, ReactNode } from 'react'
import s from './jumbotron.module.scss'
import Image from 'next/image'
import Button from '../button/button'
import clsx from 'clsx'
import Link from 'next/link'

const Jumbotron: FC<{
  title: string
  renderText: () => ReactNode | string
  classNames?: (string | boolean)[]
  style?: Record<string, string | number>
}> = ({ title, renderText, classNames = [], style = {} }) => {
  return (
    <div className={clsx(s.jumbotron, ...classNames)} style={style}>
      <div className={s.textContainer}>
        <div className={s.title}>{title}</div>

        <div>{renderText()}</div>

        <Button
          main
          style={{
            padding: '0 1rem',
            width: 'fit-content',
          }}
        >
          <Link href={'/try-free'}>Получить 1 год бесплатно</Link>
        </Button>
      </div>
    </div>
  )
}

export default Jumbotron

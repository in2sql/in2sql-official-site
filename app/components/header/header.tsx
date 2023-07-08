import React, { FC, ReactNode } from 'react'
import s from './header.module.scss'
import Image from 'next/image'
import Button from '../button/button'
import clsx from 'clsx'
import Link from 'next/link'

const Header: FC<{
  title: string
  renderText: () => ReactNode | string
  classNames?: (string | boolean)[]
  style?: Record<string, string | number>
}> = ({ title, renderText, classNames = [], style = {} }) => {
  return (
    <div className={clsx(s.header, ...classNames)} style={style}>
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

      <div className={s.image}>
        <Image
          src="/images/logo.png"
          alt="icon telegram"
          width={475}
          height={521}
          priority
        />
      </div>
    </div>
  )
}

export default Header

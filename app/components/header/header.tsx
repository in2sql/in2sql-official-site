import React, { FC, ReactNode } from 'react'
import s from './header.module.scss'
import Image from 'next/image'
import Button from '../button/button'

const Header: FC<{ title: string; renderText: () => ReactNode | string }> = ({
  title,
  renderText,
}) => {
  return (
    <div className={s.header}>
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
          Получить 1 код бесплатно
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

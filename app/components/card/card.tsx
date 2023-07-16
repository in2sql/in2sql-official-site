import React, { FC } from 'react'

import s from './card.module.scss'
import Image from 'next/image'

const Card: FC<{
  title: string
  description: string
  image: { path: string; size: { w: number; h: number } }
}> = ({ title, description, image }) => {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
      <div>
        <Image
          src={image.path}
          alt="icon"
          width={image.size.w}
          height={image.size.h}
          priority
        />
      </div>
    </div>
  )
}

export default Card

'use client'

import { FC, useState } from 'react'
import s from './accordion.module.scss'
import Image from 'next/image'
import clsx from 'clsx'

const Accordion: FC<{
  items: { id: string | number; title: string; text: string }[]
}> = ({ items }) => {
  const [itemsState, setItemsState] = useState<Record<string, boolean>>(() =>
    items.reduce((acc, current) => {
      return {
        ...acc,
        [current.id]: false,
      }
    }, {})
  )

  console.log({ itemsState })

  return (
    <div className={s.accordion}>
      {items.map((item) => (
        <div
          className={s.item}
          key={item.id}
          onClick={() => {
            setItemsState({
              ...itemsState,
              [item.id]: !itemsState[item.id],
            })
          }}
        >
          <div className={s.image}>
            <Image
              src="/images/icon-plus.png"
              alt="plus"
              width={18}
              height={16}
              priority
            />
          </div>
          <div className={s.content}>
            <div className={s.title}>{item.title}</div>
            <div
              className={clsx(s.text, {
                [s['text-open']]: itemsState[`${item.id}`],
              })}
            >
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion

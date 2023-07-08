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
          <div className={s.title}>
            <span>{itemsState[`${item.id}`] ? '-' : '+'}</span>
            {item.title}
          </div>

          <div
            className={
              itemsState[`${item.id}`]
                ? clsx(s.content, s['content-open'])
                : s.content
            }
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion

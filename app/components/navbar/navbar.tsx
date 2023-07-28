'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'
import s from './navbar.module.scss'

export const Navbar: FC<{
  additionalItems?: { path: string; label: string }[]
}> = ({ additionalItems = [] }) => {
  const pathname = usePathname()

  const items = [
    {
      path: '/contacts',
      label: 'Контакты',
    },
    // {
    //   path: '/blog',
    //   label: 'Блог',
    // },
  ]

  return (
    <div className={s.navbar}>
      <Link
        href="/"
        className={clsx(
          s.homeLink,
          s.navbar_item,
          pathname === '/' && s['navbar_item-active']
        )}
      >
        <Image
          src="/images/logo.png"
          alt="icon telegram"
          width={48}
          height={48}
          priority
        />
        <div className={s.navbar_label}>in2sql</div>
      </Link>

      {}

      {[...items, ...additionalItems].map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={clsx(
            s.navbar_item,
            pathname === item.path && s['navbar_item-active']
          )}
        >
          <div className={s.navbar_label}>{item.label}</div>
        </Link>
      ))}
    </div>
  )
}

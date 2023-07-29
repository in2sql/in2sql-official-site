'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, MouseEventHandler, ReactNode } from 'react'

export const Navbar: FC<{
  s: Record<string, string>
  additionalItems?: { path: string; label: string }[]
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}> = ({ s, additionalItems = [], onClick }) => {
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
    <>
      <Link
        href="/"
        className={clsx(
          s.homeLink,
          s.navbar_item,
          pathname === '/' && s['navbar_item-active']
        )}
        onClick={onClick}
      >
        <Image
          src="/images/logo.png"
          alt="icon telegram"
          width={48}
          height={48}
          priority
          className={s.navbar_logo}
        />
        <div className={s.navbar_label}>in2sql</div>
      </Link>

      {[...items, ...additionalItems].map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={clsx(
            s.navbar_item,
            pathname === item.path && s['navbar_item-active']
          )}
          onClick={onClick}
        >
          <div className={s.navbar_label}>{item.label}</div>
        </Link>
      ))}
    </>
  )
}

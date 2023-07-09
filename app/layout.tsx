'use client'
import './globals.scss'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['cyrillic'], weight: '400' })

import s from './layout.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { Navbar } from './components/navbar'
import Button from './components/button/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [offset, setOffset] = useState(0)
  const pathname = usePathname()
  console.log({ pathname })

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <html lang="en">
      <body className={clsx(inter.className, s.body)}>
        <header
          className={s.nav}
          style={{
            background: offset > 0 || pathname === '/contacts' ? 'black' : '',
          }}
        >
          <nav className={clsx(s.nav_item, s.navbar)}>
            <Navbar s={s} />
          </nav>

          <div className={s.nav_item}>
            <Button outline>Попробовать бесплатно</Button>
            <Button main>
              <Link href={'/try-free'}>Получить 1 год бесплатно</Link>
            </Button>
          </div>
        </header>
        {children}
        <footer className={clsx(s.footer)}>
          <div className={clsx(s.content)}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                className={s.content_item}
                style={{
                  flex: 1,
                }}
              >
                <div className={s.geoLink}>
                  <Image
                    src="/images/icon-arrow.svg"
                    alt="icon arrow"
                    className={s.geoLink_icon}
                    width={15}
                    height={15}
                    priority
                  />
                  <div className={s.geoLink_label}>Москва</div>
                </div>

                <div>
                  <div>+7 495 000 00 00 — Бизнесу и ИП</div>
                  <div>+7 495 111 11 11 — Частным клиентам</div>
                </div>

                <div className={s.social}>
                  <Image
                    src="/images/icon-telegram.svg"
                    alt="icon telegram"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                }}
              ></div>
            </div>

            <div className={s.separator} />
            <nav className={clsx(s.content_item, s.navbar)}>
              <Navbar
                s={s}
                additionalItems={[
                  {
                    path: '/try-free',
                    label: 'Получить годовую лицензию',
                  },
                ]}
              />
            </nav>

            <div className={s.content_item}>
              © 2021-2023.ООО «ЧТО ТО», официальный сайт in2sql. Передавая нам
              свои контактные данные, мы гарантируем безопасность их хранения.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

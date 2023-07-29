import { Roboto } from 'next/font/google'
import './globals.scss'

const inter = Roboto({ subsets: ['cyrillic'], weight: '400' })

import clsx from 'clsx'
import Image from 'next/image'
import { Navbar } from './components/navbar/navbar'
import { Header } from './header'
import s from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Header s={s} />

        {children}

        <footer className={clsx(s.footer)}>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              className={clsx(s.footer_item, s.contacts)}
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

          <div className={clsx(s.content_item, s.copyright)}>
            © 2021-2023.ООО «ЧТО ТО», официальный сайт in2sql. Передавая нам
            свои контактные данные, мы гарантируем безопасность их хранения.
          </div>
        </footer>
      </body>
    </html>
  )
}

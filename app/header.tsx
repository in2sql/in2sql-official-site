'use client'

import Image from 'next/image'
import Button from './components/button/button'
import Link from 'next/link'
import { Navbar } from './components/navbar/navbar'
import { FC, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export const Header: FC<{ s: Record<string, string> }> = ({ s }) => {
  const [offset, setOffset] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [toggleMenu, setToggleMenu] = useState(false)
  const [topPos, setTopPos] = useState(-500)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight
    console.log({ navHeight, navEl: navRef.current })
    toggleMenu ? setTopPos(0) : navHeight && setTopPos(-navHeight)
  }, [toggleMenu])

  const handleClick = () => setToggleMenu(false)

  return (
    <header
      className={s.header}
      style={{
        background: offset > 0 || pathname === '/contacts' ? 'black' : '',
      }}
    >
      <nav
        ref={navRef}
        className={s.nav}
        style={{
          top: topPos,
        }}
      >
        <div className={s.navbar}>
          <Navbar s={s} onClick={handleClick} />
        </div>

        <div className={s.header_buttons}>
          <Button outline onClick={handleClick}>
            Попробовать бесплатно
          </Button>
          <Button main onClick={handleClick}>
            <Link href={'/try-free'}>Получить 1 год бесплатно</Link>
          </Button>
        </div>
      </nav>

      <Image
        src={
          toggleMenu
            ? '/images/icon-close.svg'
            : '/images/icon-toggle-menu-button.svg'
        }
        alt="icon telegram"
        width={24}
        height={24}
        priority
        className={s.toggleButton}
        onClick={() => setToggleMenu(!toggleMenu)}
      />
    </header>
  )
}

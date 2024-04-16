"use client"

import { useState, useRef, useEffect } from 'react'

import styles from './styles/mobile_menu.module.css'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  
  return (
    <div className={styles.Container}>
      <button
        ref={trigger}
        aria-controls="mobile-nav"
        aria-expanded="false"
        className={`${mobileNavOpen ? styles.active : ''} ${styles.HamburgerMenu}`}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className={styles.MenuText}>Menu</span>
        <svg className={styles.MenuOpenSVG} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" rx="1"></rect>
          <rect y="11" width="24" height="2" rx="1"></rect>
          <rect y="18" width="24" height="2" rx="1"></rect>
        </svg>
      </button>
      
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={styles.MobileNav}
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className={styles.MNavItems}>
          <li style={{ width: '100%' }}><a className={styles.MNavItem} href="/signup">Sign Up</a></li>
          <li style={{ width: '100%' }}><a className={styles.MNavItem} href="/signin">Sign In</a></li>
        </ul>
      </nav>

    </div>
  )
}

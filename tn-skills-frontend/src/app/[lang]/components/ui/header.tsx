"use client"

import Link from "next/link"

import MobileMenu from "./mobile-menu"
import styles from "./styles/header.module.css"
import Logo from "./logo"
import ThemeSwitcher from "../atoms/theme-switcher"
import LocaleSwitcher from "../atoms/locale-switcher"
import { useTheme } from "@/src/context/Theme"

export default function Header() {
    const { theme } = useTheme()

    return (
        <div className={`${theme === "dark" ? `${styles.Container} ${styles.Dark}` : styles.Container}`}>
            <div className={styles.BodyContainer}>
                <div className={styles.Body}>
                    <div className={styles.LogoContainer}>
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>

                    <nav className={styles.Nav}>
                        <ul className={styles.List}>
                            <a href="/signup" className={`${theme === "dark" ? `${styles.SignUp} ${styles.Dark}` : styles.SignUp}`}>Sign Up</a>
                            <a href="/signin" className={theme === "dark" ? `${styles.SignIn} ${styles.Dark }` : styles.SignIn}>Sign In</a>
                            <ThemeSwitcher />
                            <LocaleSwitcher />
                        </ul>
                    </nav>

                    <MobileMenu />
                </div>
            </div>
        </div>
    );
}

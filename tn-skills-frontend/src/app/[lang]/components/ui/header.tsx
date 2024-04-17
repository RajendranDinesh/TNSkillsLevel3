"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import MobileMenu from "./mobile-menu"
import styles from "./styles/header.module.css"
import Logo from "./logo"
import ThemeSwitcher from "../atoms/theme-switcher"
import LocaleSwitcher from "../atoms/locale-switcher"
import { useTheme } from "@/src/context/Theme"

import Profile from '@assets/profile.png'
import Image from "next/image"

export default function Header() {
    const { theme } = useTheme()

    const [showProfile, setShowProfile] = useState<boolean>(false)

    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        const role = localStorage.getItem("userRole")
        if (role == undefined) setShowProfile(false)
        else if (role == 'admin') setShowProfile(true)
    }, [])

    useEffect(() => {
        const email = localStorage.getItem("userEmail")

        if (email || email != undefined) setEmail(email)
    }, [])

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
                            {showProfile && <Link href={'/admin'}><Image src={Profile} alt="profile" height={50} /></Link>}
                            &nbsp;&nbsp;&nbsp;
                            {email ? `Hi ${email}` :
                                <>
                                    <a href="/signup" className={`${theme === "dark" ? `${styles.SignUp} ${styles.Dark}` : styles.SignUp}`}>Sign Up</a>
                                    <a href="/signin" className={theme === "dark" ? `${styles.SignIn} ${styles.Dark}` : styles.SignIn}>Sign In</a>
                                </>
                            }
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

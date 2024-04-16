"use client"

import Link from "next/link"
import Image from "next/image"

import Logo from "./logo"
import FBLogo from "@assets/logos/facebook.png"
import InstaLogo from "@assets/logos/insta.png"
import XLogo from "@assets/logos/x.png"
import LinkedInLogo from "@assets/logos/linkedin.png"

import styles from './styles/footer.module.css'
import { useTheme } from "@/src/context/Theme"

export default function Footer() {

    const { theme } = useTheme();

    return (
        <div className={`${theme === "dark" ? `${styles.Footer} ${styles.Dark}` : styles.Footer}`}>
            <div className={styles.Top}>
                <div className={styles.Left}>
                    <Link href={'/'}><Logo height={60} /></Link>
                    <p>Helping to harness the power of the sun to illuminate the world with sustainable energy solutions.</p>
                </div>
                <div className={styles.Right}>
                    <hr className={styles.hr} />
                    <h3 style={{ marginTop: 0 }}>Resources</h3>
                    <Link href={'/blog'} className={styles.link}>Blogs</Link>
                    <Link href={'/survey'} className={styles.link}>Survey</Link>
                </div>
                <hr className={styles.hr} />
            </div>

            <div className={styles.Bottom}>
                <div>
                    &copy; Solar Energy World. All rights reserved.
                </div>

                <div className={styles.Socials}>
                    <Image className={styles.Social} src={XLogo} alt="x-logo" />
                    <Image className={styles.Social} src={FBLogo} alt="fb-logo" />
                    <Image className={styles.Social} src={InstaLogo} alt="insta-logo" />
                    <Image className={styles.Social} src={LinkedInLogo} alt="linkedin-logo" />
                </div>
            </div>
        </div>
    )
}
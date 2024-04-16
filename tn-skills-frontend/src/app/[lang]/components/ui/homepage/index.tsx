"use client"

import Logo from '../logo';
import styles from './home.module.css'
import { useTheme } from '@/src/context/Theme'

export default function HomePage() {

    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? `${styles.HomePage} ${styles.Dark}` : styles.HomePage}>
            <div className={styles.LogoContainer}>
                <Logo height={200} />
            </div>
            <div className={styles.HeadingContainer}>
                <h1 className={styles.Heading}>Solar Energy World</h1>
            </div>
            <div className={styles.IntroVideoContainer}>
                <iframe className={styles.IntroVideo} src="https://www.youtube.com/embed/nImUWDmxBkw?si=2CscAHjUVGPfZrvR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
}
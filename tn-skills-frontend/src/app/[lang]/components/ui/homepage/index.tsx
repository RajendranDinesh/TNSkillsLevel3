"use client"

import Link from 'next/link'

import Logo from '../logo'
import styles from './home.module.css'
import { useTheme } from '@/src/context/Theme'
import { getDictionary } from '@/get-dictionary'

interface HomePageParams {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["home"];
}

export default function HomePage({
    dictionary
}: HomePageParams) {

    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? `${styles.HomePage} ${styles.Dark}` : styles.HomePage}>
            <div className={styles.LogoContainer}>
                <Logo height={200} />
            </div>
            <div className={styles.HeadingContainer}>
                <h1 className={styles.Heading}>{dictionary.heading}</h1>
            </div>
            <div className={styles.TagLineContainer}>
                <h3 className={styles.TagLine}>{dictionary.tagLine}</h3>
                <div className={styles.BtnContainer}>
                    <Link href={'/survey'} className={theme === 'dark' ? `${styles.Survey} ${styles.Dark}` : styles.Survey}>{dictionary.surveyBtn}</Link>
                    <Link href={'/about'} className={theme === 'dark' ? `${styles.LearnMore} ${styles.Dark}` : styles.LearnMore}>{dictionary.learnMore}</Link>
                </div>
            </div>
            <div className={styles.IntroVideoContainer}>
                <iframe className={styles.IntroVideo} src="https://www.youtube.com/embed/nImUWDmxBkw?si=2CscAHjUVGPfZrvR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
}
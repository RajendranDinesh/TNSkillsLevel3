"use client"

import styles from './styles/theme-switcher.module.css'
import { useTheme } from '@/src/context/Theme'


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label htmlFor="theme" className={styles.theme}>
            <span className={styles.theme__toggle_wrap}>
                <input onChange={() => { toggleTheme() }} id="theme" className={styles.theme__toggle} type="checkbox" role="switch" name="theme" value="dark" />
                <span className={styles.theme__icon}>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                    <span className={styles.theme__icon_part}></span>
                </span>
            </span>
        </label>
    )
}

export default ThemeSwitcher
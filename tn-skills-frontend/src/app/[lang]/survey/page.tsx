"use client"

import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

import styles from './styles/page.module.css'

export default function Survey() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={styles.HomeContainer}>
            <div className={styles.Page}>
                <h1 data-aos={'zoom-in'}>Take our Survey</h1>
                <h2 data-aos={'fade-up'} data-aos-easing={'linear'} data-aos-duration={1000}>Make sure you are logged in first</h2>
            </div>
        </div>
    )
}
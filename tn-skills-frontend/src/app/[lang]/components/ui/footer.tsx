import Link from "next/link"
import Logo from "./logo"
import styles from './styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Top}>
                <div className={styles.Left}>
                    <Link href={'/'}><Logo height={60} /></Link>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>

                <div className={styles.Right}>
                    <h3>Pages</h3>
                    <Link href={'/blog'}>Blogs</Link>
                    <Link href={'/survey'}>Survey</Link>
                </div>
            </div>

            <div>
                <div>

                </div>

                <div>

                </div>
            </div>
        </div>
    )
}
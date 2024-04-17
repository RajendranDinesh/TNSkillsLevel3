import Link from 'next/link'
import styles from '../styles/admin.module.css'

export default function AdminDashboard() {
    return (
        <div className={styles.AdminDashboard}>
            <div className={styles.Boundary}>
                <div className={styles.HeaderContainer}>
                    <div>
                        <h1 className={styles.Header}>Hello admin 🖖</h1>
                        <Link href={'/admin/questions/add'} className={styles.Button}>Add question</Link>
                    </div>

                    <div className={styles.CardContainer}>
                        <div className={styles.Card}>
                            Total number of questions <span>5</span>
                        </div>

                        <div className={styles.Card}>
                            Total entries so far <span>10</span>
                        </div>

                        <div className={styles.Card}>
                            Questions answered <span>50</span>
                        </div>
                    </div>
                </div>

                <div className={styles.CrunchContainer}>
                    <h3>Here are the latest crunches from our <span>Survey</span></h3>
                </div>
            </div>
        </div>
    )
}
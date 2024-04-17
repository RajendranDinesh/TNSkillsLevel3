import Link from 'next/link'

import styles from './styles/signin.module.css'

import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Form from './components/form'

interface SignInParams {
    params: {
        lang: Locale
    }
}

export default async function SignIn({
    params: { lang }
}: SignInParams) {

    const dictionary = (await getDictionary(lang)).signin;

    return (
        <div className={styles.SignIn}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Login</h1>
                
                <Form dictionary={dictionary} />

                {/* signup prompt */}
                <div className={styles.Signup}>
                    <p dangerouslySetInnerHTML={{ __html: dictionary.no_account }} />
                    <Link rel="noopener noreferrer" href="/signup">{dictionary.sign_up}</Link>
                </div>
            </div>
        </div>
    )
}
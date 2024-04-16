import Link from 'next/link'

import styles from './styles/signin.module.css'

import { Locale } from '../../../../i18n-config'
import { getDictionary } from '../../../../get-dictionary'

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
                <form className={styles.Form}>

                    {/* email input */}
                    <div className={styles.Input_group}>
                        <label htmlFor="email">{dictionary.email}</label>
                        <input type="email" name="email" placeholder="prd@zohomail.in" required />
                    </div>

                    {/* password input */}
                    <div className={styles.Input_group}>
                        <label htmlFor="passcode">{dictionary.password}</label>
                        <input type="password" name="passcode" required />
                    </div>

                    {/* forgot password */}
                    <div className={styles.Forgot}>
                        <a>{dictionary.forgot} ?</a>
                    </div>
                    
                    <button className={styles.Sign}>{dictionary.sign_in}</button>
                </form>

                {/* signup prompt */}
                <div className={styles.Signup}>
                    <p dangerouslySetInnerHTML={{ __html: dictionary.no_account }} />
                    <Link rel="noopener noreferrer" href="/signup">{dictionary.sign_up}</Link>
                </div>
            </div>
        </div>
    )
}
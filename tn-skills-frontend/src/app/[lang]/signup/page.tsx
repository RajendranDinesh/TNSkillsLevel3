import styles from './styles/signup.module.css'

import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Form from './components/form'

interface SignUpParams {
    params: {
        lang: Locale
    }
}

export default async function SignUp({
    params: { lang }
}: SignUpParams) {

    const dictionary = (await getDictionary(lang)).signin;
    
    return (
        <div className={styles.SignIn}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Sign up</h1>
                
                <Form dictionary={dictionary}/>
            </div>
        </div>
    )
}
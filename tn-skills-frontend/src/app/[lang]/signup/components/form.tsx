"use client"

import { getDictionary } from '@/get-dictionary'
import styles from '../styles/signup.module.css'
import { useState } from 'react'
import { Request } from '@/networking'
import { HttpStatusCode } from 'axios'
import { ShowToast } from '../../components/atoms/toast'

interface FormParams {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["signin"];
}

interface SignUp {
    emailId: string,
    password: string
}

export default function Form({
    dictionary
}: FormParams) {

    const [userData, setUserData] = useState<SignUp>({emailId: '', password: ''});

    const handleChange = (e: React.BaseSyntheticEvent) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.BaseSyntheticEvent) => {
        e.preventDefault()

        try {
            const response = await Request('POST', '/user/signup', userData)

            if (response.status === HttpStatusCode.Created) {
                ShowToast("success", <p>User created successfully</p>)
            }

        } catch (error) {
            ShowToast("error", <p>Some error occured</p>)
        }
    }

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>

            {/* email input */}
            <div className={styles.Input_group}>
                <label htmlFor="emailId">{dictionary.email}</label>
                <input onChange={handleChange} type="email" name="emailId" placeholder="prd@zohomail.in" required />
            </div>

            {/* password input */}
            <div className={styles.Input_group}>
                <label htmlFor="password">{dictionary.password}</label>
                <input onChange={handleChange} type="password" name="password" required />
            </div>

            <div className={styles.Input_group}>
                <label htmlFor="conf_passcode">{dictionary.conf_password}</label>
                <input type="password" name="conf_passcode" required />
            </div>

            <button className={styles.Sign}>{dictionary.sign_up}</button>
        </form>
    )
}
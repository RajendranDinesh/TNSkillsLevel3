"use client"

import { BaseSyntheticEvent, useState } from 'react'
import { HttpStatusCode } from 'axios'

import { getDictionary } from '@/get-dictionary'
import styles from '../styles/signin.module.css'
import { useTheme } from '@/src/context/Theme'
import { Request } from '@/networking'
import { ShowToast } from '../../components/atoms/toast'

interface FormParams {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["signin"];
}

interface SignIn {
    email: string;
    password: string;
}

export default function Form({
    dictionary
}: FormParams) {

    const [userData, setUserData] = useState<SignIn>({ email: '', password: '' });

    const { theme } = useTheme();

    const handleChange = (e: BaseSyntheticEvent) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const redirect = ({ userRole }: { userRole: string }) => {
        switch (userRole) {
            case "admin":
                window.location.href = "/admin";
                break;

            case "user":
                window.location.href = "/survey";
                break;

            default:
                break;
        }
    }

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault()

        try {
            const response = await Request('POST', '/user/signin', userData)

            if (response.status === HttpStatusCode.Ok) {

                const { token, role, email } = response.data;

                localStorage.setItem("authToken", token);
                localStorage.setItem("userRole", role);
                localStorage.setItem("userEmail", email);

                ShowToast("success", <p>Logged In successfully</p>, { theme: theme });

                redirect({userRole: role as string});
            }

        } catch (error) {
            console.log(error)
            ShowToast("error", <p>Some error occured</p>)
        }
    }

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>

            {/* email input */}
            <div className={styles.Input_group}>
                <label htmlFor="email">{dictionary.email}</label>
                <input onChange={handleChange} type="email" name="email" placeholder="prd@zohomail.in" required />
            </div>

            {/* password input */}
            <div className={styles.Input_group}>
                <label htmlFor="password">{dictionary.password}</label>
                <input onChange={handleChange} type="password" name="password" required />
            </div>

            {/* forgot password */}
            <div className={styles.Forgot}>
                <a>{dictionary.forgot} ?</a>
            </div>

            <button className={styles.Sign}>{dictionary.sign_in}</button>
        </form>
    )
}
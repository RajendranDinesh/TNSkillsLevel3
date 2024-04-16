"use client"

import { BaseSyntheticEvent, useState } from 'react'
import { HttpStatusCode } from 'axios'

import { getDictionary } from '@/get-dictionary'
import styles from '../styles/signup.module.css'
import { Request } from '@/networking'
import { ShowToast } from '../../components/atoms/toast'
import { useTheme } from '@/src/context/Theme'

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

    const { theme } = useTheme();

    const handleChange = (e: BaseSyntheticEvent) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const redirect = ({userRole}: {userRole: string}) => {
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
            const response = await Request('POST', '/user/signup', userData)

            if (response.status === HttpStatusCode.Created) {

                const { token, userRole } = response.data;
    
                localStorage.setItem("authToken", token);
                localStorage.setItem("userRole", userRole);

                ShowToast("success", <p>User created successfully</p>, {theme: theme});

                redirect(userRole);
            }

        } catch (error) {
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

            <div className={styles.Input_group}>
                <label htmlFor="conf_passcode">{dictionary.conf_password}</label>
                <input type="password" name="conf_passcode" required />
            </div>

            <button className={styles.Sign}>{dictionary.sign_up}</button>
        </form>
    )
}
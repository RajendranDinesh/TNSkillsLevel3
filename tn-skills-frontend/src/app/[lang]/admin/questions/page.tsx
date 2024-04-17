"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '../styles/questions.module.css'
import { Request } from '@/networking';
import { ShowToast } from '../../components/atoms/toast'

interface Question {
    _id: string;
    question: string;
    options: [string]
}

export default function Questions() {

    const [questionData, setQuestionData] = useState<[Question] | null>(null)

    const getQuestionData = async () => {
        try {
            const response = await Request("GET", "/survey/questions");
            setQuestionData(response.data);
        } catch (error) {
            ShowToast("error", <p>Error while fetching question</p>)
        }
    }

    useEffect(() => {
        getQuestionData();
    }, [])

    return (
        <div className={styles.QuestionDashboard}>
            <div className={styles.Boundary}>
                <div className={styles.Header}>
                    <h2>Our questions in the survey are as follows,</h2>
                    <Link href={'/admin/questions/add'} className={styles.Button}>Add question</Link>
                </div>
                <div>
                    {questionData?.map((question, index) =>
                        <div className={styles.QuestionContainer} key={index}>
                            <h3>{index + 1}. {question.question}</h3>
                            <ul>{question.options.map((option, index) => <li key={index}>{option}</li>)}</ul>
                        </div>)}
                </div>
            </div>
        </div>
    )
}
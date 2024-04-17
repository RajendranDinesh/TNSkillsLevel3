"use client"

import { BaseSyntheticEvent, useState } from 'react'
import styles from '../../styles/add_questions.module.css'
import { ShowToast } from '../../../components/atoms/toast';
import { Request } from '@/networking';
import { HttpStatusCode } from 'axios';

interface Question {
    question: string;
    options: string;
}

export default function AddQuestion() {

    const [questionData, setQuestionData] = useState<Question>({ question: "", options: "" })

    const handleChange = (e: BaseSyntheticEvent) => {
        setQuestionData({ ...questionData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        try {

            const options = questionData.options.split(',');

            const qData = [{...questionData, options}];

            const response = await Request("POST", "/survey/questions", qData)

            if ( response.status === HttpStatusCode.Created ) {
                ShowToast("success", <p>question has been added</p>)
                setQuestionData({question: '', options: ''})
            }
        } catch (error) {
            ShowToast("error", <p>Error occured while posting new question</p>)
        }
    }

    return (
        <div className={styles.AddQuestion}>
            <div className={styles.Boundary}>
                <div>
                    <h1>Add Question</h1>
                    <br /><br />

                    <div className={styles.QuestionContainer}>
                        <label htmlFor='question'>Question</label>
                        <input onChange={handleChange} className={styles.Input} name='question' />
                    </div>

                    <br />

                    <div className={styles.QuestionContainer}>
                        <label htmlFor='options'>Options (seperate them with commas)</label>
                        <input onChange={handleChange} className={styles.Input} name='options' />
                    </div>

                    <br />

                    <button className={styles.Button} onClick={handleSubmit}>Add question</button>
                </div>

                {questionData.options.split(',').length > 1 && <div>
                    <h3>Given options are</h3>
                    <ul>
                        {questionData.options.split(',').map((option, index) => <li key={index}>{option}</li>)}
                    </ul>
                </div>}
            </div>
        </div>
    )
}
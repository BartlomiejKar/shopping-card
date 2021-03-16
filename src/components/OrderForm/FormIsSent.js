import React from 'react';
import styles from "./OrderForm.module.css"


export const FormIsSent = () => {
    return (
        <div className={styles.sendContainer}>
            <h3 className={styles.titleSendForm}>Wysłano formularz, dziękujemy</h3>
        </div>
    )
}
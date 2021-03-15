import React, { useContext, useState } from 'react';
import { ProductsContext } from '../provider/providerCounter';
import axios from "../../axios";

import { Spinner } from "../Spinner/Spinner"

import styles from "./OrderForm.module.css";
import { FormIsSent } from './FormIsSent';

const initialForm = {
    name: "",
    surname: "",
    adress: "",
    message: ""
}
export const OrderForm = () => {
    const { counter } = useContext(ProductsContext);

    const [formValues, setFormValues] = useState(initialForm);
    const [isLoading, setIsLoading] = useState(false);
    const [afterSendForm, setAfterSendForm] = useState(false)
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        const order = {
            name: formValues.name,
            surname: formValues.surname,
            adress: formValues.adress,
            message: formValues.message,
            value: counter
        }
        axios.post("/form.json", order)
            .then(response => {
                setIsLoading(false);
                setAfterSendForm(true);
            }
            )
            .catch(err => console.log(err))
        setFormValues(initialForm)
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                <h4>{counter} PLN</h4>
                <div className={styles.container}>
                    <label>Imię</label>
                    <input type="text" placeholder="imię" name="name" value={formValues.name} onChange={handleInputChange} required />
                </div>
                <div className={styles.container}>
                    <label>Nazwisko</label>
                    <input type="text" placeholder="nazwisko" name="surname" value={formValues.surname} onChange={handleInputChange} />
                </div>
                <div className={styles.container}>
                    <label>Adres</label>
                    <input type="text" placeholder="adres" name="adress" value={formValues.adress} onChange={handleInputChange} required />
                </div>
                <div className={styles.container}>
                    <label>Wiadomość dla sprzedawcy</label>
                    <textarea placeholder="Wpisz wiadomość" name="message" value={formValues.message} onChange={handleInputChange} />
                </div>
                <button type="submit">Przejdź do płatności</button>
            </div>
        </form>
    )
    const Loaded = isLoading ? <Spinner /> : form
    const FormSend = !afterSendForm ? Loaded : <FormIsSent />

    return (
        <>
            {/* {isLoading ? <Spinner /> : form}
            {afterSendForm ? <FormIsSent /> : null} */}
            {FormSend}
        </>
    )
}
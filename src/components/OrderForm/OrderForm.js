import React, { useContext, useState } from 'react';
import { ProductsContext } from '../provider/providerCounter';
import axios from "../../axios"

import styles from "./OrderForm.module.css";

const initialForm = {
    name: "",
    surname: "",
    adress: "",
    message: ""
}
export const OrderForm = () => {
    const { counter } = useContext(ProductsContext);

    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [adress, setAdress] = useState("");
    // const [message, setMessage] = useState("");
    const [formValues, setFormValues] = useState(initialForm)
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            name: formValues.name,
            surname: formValues.surname,
            adress: formValues.adress,
            message: formValues.message
        }
        axios.post("/form.json", order)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        setFormValues(initialForm)
    }

    return (
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
                <button type="submit">Wyślij</button>
            </div>
        </form>
    )
}
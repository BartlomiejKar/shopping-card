import React, { useContext } from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { ProductsContext } from "../../provider/providerCounter"

export const ItemCard = ({ name, description, id, img, value }) => {
    const { addProductToCart, isAuthenticated } = useContext(ProductsContext);
    const disabledButton = isAuthenticated ? false : true;
    const textContent = isAuthenticated ? "Dodaj do koszyka" : "Zaloguj się by dodać przedmiot"
    return (
        <div className={styles.container} key={id}>
            <p>{name.toUpperCase()}</p>
            <p>{description}</p>
            <img className={styles.image} src={img} alt={name} />
            <button disabled={disabledButton} onClick={() => addProductToCart(name, img, value)} className={styles.addCardButton}>{textContent}</button>
            <h4>{value + " PLN"}</h4>
        </div>
    )
}
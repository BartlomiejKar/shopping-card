import React, { useContext } from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { ProductsContext } from "../../provider/providerCounter"

export const ItemCard = ({ name, description, id, img }) => {
    const { addProductToCart } = useContext(ProductsContext)
    return (
        <div className={styles.container} key={id}>
            <p>{name.toUpperCase()}</p>
            <p>{description}</p>
            <img className={styles.image} src={img} alt={name} />
            <button onClick={() => addProductToCart(name, img)} className={styles.addCardButton}>Dodaj do koszyka</button>
        </div>
    )
}
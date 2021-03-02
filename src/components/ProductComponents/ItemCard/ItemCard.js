import React from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

export const ItemCard = ({ name, description, id, img }) => {

    return (
        <div className={styles.container} key={id}>
            <p>{name}</p>
            <p>{description}</p>
            <img className={styles.image} src={img} alt={name} />
            <button className={styles.addCardButton}>Dodaj do koszyka</button>
        </div>
    )
}
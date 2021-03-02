import React from 'react';

import styles from "../../../css/products_components/itemCard.module.css"
export const ProductsCard = ({ products }) => {
    return (
        <div className={styles.gridContainer}>
            {products}
        </div>
    )
}
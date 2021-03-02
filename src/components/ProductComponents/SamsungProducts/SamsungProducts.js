import React from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { samsung } from "./DataSamsungProducts"

import { ItemCard } from "../ItemCard/ItemCard"
import { ProductsCard } from '../ItemCard/ProductsCard';

const SamsungProducts = () => {

    const dataSamsung = samsung;
    const products = dataSamsung.map(({ id, img, description, name }) => {
        return (
            <ItemCard key={id} id={id} img={img} description={description} name={name} />
        )
    });

    return (
        <div>
            <h2 className={styles.title}>Produkty samsunga</h2>
            <ProductsCard products={products} />
        </div>
    )
}

export default SamsungProducts;
import React from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { xiaomi } from "./DataXiaomiProducts";
import { ItemCard } from "../ItemCard/ItemCard"
import { ProductsCard } from '../ItemCard/ProductsCard';


const XiaomiProducts = () => {

    const dataXiaomi = xiaomi;
    const products = dataXiaomi.map(({ id, img, description, name }) => {
        return (
            <ItemCard key={id} id={id} img={img} description={description} name={name} />
        )
    });

    return (
        <div>
            <h2 className={styles.title}>Produkty Xiaomi</h2>
            <ProductsCard products={products} />
        </div>
    )
}

export default XiaomiProducts;
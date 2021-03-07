import React from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { iphone } from "./DataProductsIphone";
import { ItemCard } from "../ItemCard/ItemCard"
import { ProductsCard } from '../ItemCard/ProductsCard';


const IphoneProducts = () => {

    const dataIphone = iphone;
    const products = dataIphone.map(({ id, img, description, name, value }) => {
        return (
            <ItemCard key={id} id={id} img={img} description={description} name={name} value={value} />
        )
    });

    return (
        <div>
            <h2 className={styles.title}>Produkty Iphone</h2>
            <ProductsCard products={products} />
        </div>
    )
}

export default IphoneProducts;
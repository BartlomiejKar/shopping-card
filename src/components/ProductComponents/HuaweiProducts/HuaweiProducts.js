import React from 'react';
import styles from "../../../css/products_components/itemCard.module.css"

import { Huawei } from "./DataHuaweiProducts";
import { ItemCard } from "../ItemCard/ItemCard"
import { ProductsCard } from '../ItemCard/ProductsCard';


const HuaweiProducts = () => {

    const dataHuawei = Huawei;
    const products = dataHuawei.map(({ id, img, description, name }) => {
        return (
            <ItemCard key={id} id={id} img={img} description={description} name={name} />
        )
    });

    return (
        <div>
            <h2 className={styles.title}>Produkty Huawei</h2>
            <ProductsCard products={products} />
        </div>
    )
}

export default HuaweiProducts;
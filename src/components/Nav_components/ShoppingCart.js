import React, { useContext } from 'react';

import Icon from "../../icons/shopping-cart.svg"

import { ProductsContext } from "../provider/providerCounter"
import style from "../../css/nav_components/shopping_cart.module.css"

const ShoppingCart = () => {
    const { products } = useContext(ProductsContext);
    return (
        <>
            <img className={style.icon} src={Icon} alt="shoppingCart" />
            <em className={style.em}>{products.length}</em>
        </>
    )
}


export default ShoppingCart;
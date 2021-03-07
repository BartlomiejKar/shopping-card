import React, { useContext } from 'react';

import { Link } from "react-router-dom"

import Icon from "../../icons/shopping-cart.svg"

import { ProductsContext } from "../provider/providerCounter"
import style from "../../css/nav_components/shopping_cart.module.css"

const ShoppingCart = () => {
    const { products } = useContext(ProductsContext);
    return (
        <>
            <Link to="/cart">
                <img className={style.icon} src={Icon} alt="shoppingCart" />
            </Link>
            <em className={style.em}>{products.length}</em>
        </>
    )
}


export default ShoppingCart;
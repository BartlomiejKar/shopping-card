import React from 'react';


import Icon from "../../icons/shopping-cart.svg"

import style from "../../css/nav_components/shopping_cart.module.css"

const ShoppingCart = () => {

    return (
        <img className={style.icon} src={Icon} alt="shoppingCart" />
    )
}


export default ShoppingCart;
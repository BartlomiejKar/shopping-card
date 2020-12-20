import React from 'react';

import styles from "../css/navigation.module.css"
import iconShop from "../icons/shopping-logo-svgrepo-com.svg"

import Category from "./Nav_components/Category"
import Input from "./Nav_components/Input"
import Login from "./Nav_components/Login"
import ShoppingCart from "./Nav_components/ShoppingCart"


const Navigation = () => {
    return (

        <nav className={styles.nav}>
            <div className={styles.logo_container}>
                <img src={iconShop} alt="shopIcon" />
            </div>
            <ul>
                <li><Category value="Męskie" /></li>
                <li><Category value="Damskie" /></li>
                <li><Category value="Dziecięce" /></li>
                <li><Category value="Sport" /></li>
            </ul>
            <div>
                <Input />
            </div>
            <div>
                <Login />
            </div>
            <div>
                <ShoppingCart />
            </div>
        </nav>
    )
}

export default Navigation
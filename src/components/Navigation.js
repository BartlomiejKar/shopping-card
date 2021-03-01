import React from 'react';

import { Link } from "react-router-dom"

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
                <Link to="/">
                    <img src={iconShop} alt="shopIcon" />
                </Link>
            </div>
            <ul className={styles.categoryList}>
                <Category />
            </ul>
            <div className={styles.input}>
                <Input />
            </div>
            <div className={styles.login_container}>
                <Login />
            </div>
            <div className={styles.shoppingCart_container}>
                <ShoppingCart />
            </div>
        </nav>
    )
}

export default Navigation
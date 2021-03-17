import React from 'react';

import { Link } from "react-router-dom"

import styles from "../css/navigation.module.css";
import iconShop from "../icons/shopping-logo-svgrepo-com.svg"

import Category from "./Nav_components/Category"
import Login from "./Nav_components/Login"
import ShoppingCart from "./Nav_components/ShoppingCart"


const Navigation = () => {
    // const hamburgerMenu = () => {
    //     const ul = document.getElementsByClassName(`${styles.categoryListMobile}`);
    //     console.log(ul)
    //     if (ul.className === `${styles.categoryListMobile}`) {
    //         ul.className.toggle(`${styles.categoryList}`)
    //     } else {
    //         ul.className.toggle(`${styles.categoryListMobile}`)
    //     }
    // }
    return (
        <nav className={styles.nav}>
            <div className={styles.logo_container}>
                <Link to="/">
                    <img src={iconShop} alt="shopIcon" />
                </Link>
            </div>
            <ul className={`${styles.categoryList} ${styles.categoryListMobile}`}>
                <Category />
            </ul>
            <Login />
            <div className={styles.shoppingCart_container}>
                <ShoppingCart />
            </div>
        </nav >
    )
}

export default Navigation
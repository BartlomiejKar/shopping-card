import React from 'react';

import { Link } from "react-router-dom"

import styles from "../css/navigation.module.css";
import iconShop from "../icons/shopping-logo-svgrepo-com.svg"

import Category from "./Nav_components/Category"
import Login from "./Nav_components/Login"
import ShoppingCart from "./Nav_components/ShoppingCart";
import HamburgerMenu from "./Nav_components/HamburgerMenu"



const Navigation = () => {


    return (
        <>
            <nav>
                <div className={styles.mobileMenu}>
                    <HamburgerMenu />
                </div>
            </nav>
            <nav className={styles.nav}>
                <div className={styles.logo_container}>
                    <Link to="/">
                        <img src={iconShop} alt="shopIcon" />
                    </Link>
                </div>
                <ul className={styles.categoryList}>
                    <Category />
                </ul>
                <Login />
                <div className={styles.shoppingCart_container}>
                    <ShoppingCart />
                </div>
            </nav>
        </>
    )
}

export default Navigation
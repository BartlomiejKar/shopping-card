import React, { useState } from 'react';
import Category from './Category';
import styles from "./Hamburger.module.css"

const HamburgerMenu = () => {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        setActive(!active)
    }
    const closeHamburger = () => {
        setActive(false)
    }
    return (
        <>
            <button className={styles.categoryListMobile} onClick={toggleMenu}></button>
            <ul className={active ? styles.hamburgerMenu : styles.hamburgerMenuNone}>
                <Category onClick={closeHamburger} />
            </ul>
        </>
    )
}

export default HamburgerMenu;
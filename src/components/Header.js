import React from 'react';


import Slider from "./header_components/Slider"

import styles from "../css/header.module.css"
const Header = () => {
    return (
        <header className={styles.container_header}>
            <h2 className={styles.header_title}>Bestsellery</h2>
            <Slider />
        </header>
    )
}


export default Header;
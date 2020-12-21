import React from 'react';


import Slider from "./header_components/Slider"

import styles from "../css/header.module.css"
const Header = () => {
    return (
        <header className={styles.container_header}>
            <Slider />
        </header>
    )
}


export default Header;
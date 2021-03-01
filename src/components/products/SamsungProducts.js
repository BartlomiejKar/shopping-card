import React from 'react';

import styles from "../../css/navigation.module.css"

const SamsungProducts = ({ value }) => {
    return (
        <li className={styles.li}>
            { value}
        </li>
    )
}

export default SamsungProducts;
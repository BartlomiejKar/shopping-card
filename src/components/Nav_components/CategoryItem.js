import React from 'react';

import styles from "../../css/navigation.module.css"

const CategoryItem = ({ value }) => {
    return (
        <>
            <li className={styles.li}>
                {value}
            </li>
        </>
    )
}

export default CategoryItem;
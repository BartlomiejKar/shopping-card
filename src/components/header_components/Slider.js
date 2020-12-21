import React from 'react';

import styles from "../../css/header_components/slider.module.css"

const Slider = () => {

    return (

        <div className={styles.container_slider}>
            <div>
                <div>1/3</div>
                <img src="" alt="" />
            </div>
            <div>
                <div>2/3</div>
                <img src="" alt="" />
            </div>
            <div>
                <div>3/3</div>
                <img src="" alt="" />
            </div>
            <button>&#10094;</button>
            <button>&#10095;</button>
        </div>

    )
}

export default Slider
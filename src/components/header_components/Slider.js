import React, { useState } from 'react';

import styles from "../../css/header_components/slider.module.css"

import img1 from "../../images/img1.jpg";

import img2 from "../../images/img2.png";

import img3 from "../../images/img3.jpg"

const Slider = () => {

    const images = [img1, img2, img3]

    const [page, setPage] = useState(1)

    const nextPage = () => {
        console.log(page)
        setPage(page + 1)

    }

    const prevPage = () => {
        console.log(page)
        setPage(page - 1)

    }
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
            <button onClick={prevPage} className={styles.prev}>&#10094;</button>
            <button onClick={nextPage} className={styles.next}>&#10095;</button>
        </div>

    )
}

export default Slider
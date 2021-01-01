import React, { useState } from 'react';

import styles from "../../css/header_components/slider.module.css"

import img1 from "../../images/img1.jpg";

import img2 from "../../images/img2.png";

import img3 from "../../images/img3.jpg"

const images = [{ src: img1 }, { src: img2 }, { src: img3 }]

const Slider = () => {

    const [counter, setCounter] = useState(0);
    const imagesLength = images.length - 1


    const sliderImages = images.map((element, index) => {
        return (
            <div key={index} className={index === counter ? styles.container_slider : styles.none}>
                <img src={element.src} alt="obraz" />
            </div>
        )
    })

    const nextImage = () => {
        setCounter(counter === imagesLength ? 0 : counter + 1)
        console.log(counter)
    }

    const prevImage = () => {
        setCounter(counter === 0 ? imagesLength : counter - 1)
        console.log(counter)
    }

    return (
        <>
            <button onClick={prevImage} className={styles.prev}>&#10094;</button>
            {sliderImages}
            <button onClick={nextImage} className={styles.next}>&#10095;</button>
        </>
    )
}


export default Slider
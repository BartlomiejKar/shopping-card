import React from 'react';

import styles from "../../css/content.module.css"

import ArticleData from "./ArticleData"

import svgIcon from "../../icons/right-arrow.svg"

const Articles = () => {

    const section = ArticleData.map((el, index) => {
        const { title, img, button } = el
        return (
            <div key={index} className={styles.single_article_container}>
                <h3 className={styles.title}>{title}</h3>
                <img className={styles.image} src={img} alt="" />
                <button className={styles.button}>
                    {button}
                    <img alt="" className={styles.svg_icon} src={svgIcon} />
                </button>
            </div>
        )
    })

    return (
        <div className={styles.container_content}>
            {section}
        </div >
    )
}


export default Articles
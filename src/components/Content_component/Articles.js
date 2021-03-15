import React from 'react';
import { Link } from "react-router-dom"

import styles from "../../css/content.module.css"

import ArticleData from "./ArticleData"

import svgIcon from "../../icons/right-arrow.svg"

const Articles = () => {

    const section = ArticleData.map((element, index) => {
        const { title, img, button, description } = element
        return (
            <div key={index} className={styles.single_article_container}>
                <h3 className={styles.title}>{title}</h3>
                <img className={styles.image} src={img} alt="" />
                <Link to={{
                    pathname: `/articles/${title}`,
                    description: description,
                    title: title,
                    img: img
                }} className={styles.button}>
                    {button}
                    <img alt="" className={styles.svg_icon} src={svgIcon} />
                </Link>
            </div>
        )
    })

    return (
        <div className={styles.container_content}>
            {section}
        </div >
    )
}


export default Articles;
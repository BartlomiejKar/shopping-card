import React from 'react';

import { Link } from "react-router-dom"

import svgIcon from "../../icons/right-arrow.svg"
import styles from "./SingleArticle.module.css"

export const SingleArticle = (props) => {
    const { description, title, img } = props.location
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <img className={styles.image} src={img} alt="" />
            <p className={styles.description}>{description}</p>
            <Link className={styles.linkToBack} to="/">Powrót <img alt="" className={styles.svg_icon} src={svgIcon} /></Link>
        </div>
    )
}
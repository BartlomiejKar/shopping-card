import React from 'react';

import Icon from "../../icons/magnifying-glass.svg"

import style from "../../css/nav_components/input.module.css"

const Input = () => {

    return (
        <>
            <input type="text" />
            <img className={style.icon} src={Icon} alt="search" />
        </>
    )
}

export default Input;
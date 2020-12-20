import React from 'react';

import Icon from "../../icons/magnifying-glass.svg"

import style from "../../css/nav_components/input.module.css"

const Input = () => {

    return (
        <div className={style.input}>
            <input type="text" />
            <img className={style.icon} src={Icon} alt="search" />
        </div>

    )
}

export default Input;
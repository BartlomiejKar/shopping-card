import React from 'react';

import Icon from "../../icons/enter.svg"

import style from "../../css/nav_components/login.module.css"

const Login = () => {
    return (
        <>
            <p>Zaloguj/Zarejestruj</p>
            <img className={style.icon} src={Icon} alt="login" />
        </>
    )
}

export default Login;
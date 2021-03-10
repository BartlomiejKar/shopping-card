import React from 'react';
import { Link } from "react-router-dom"

import Icon from "../../icons/enter.svg"

import style from "../../css/nav_components/login.module.css"

const Login = () => {
    const navStyle = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <>
            <Link style={navStyle} to="/login">
                <p>Zaloguj/Zarejestruj</p>
            </Link>
            <img className={style.icon} src={Icon} alt="login" />
        </>
    )
}

export default Login;
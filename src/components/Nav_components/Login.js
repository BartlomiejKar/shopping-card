import React from 'react';
import { Link } from "react-router-dom";

import { LoginForm } from '../loginForm/LoginForm'

import Icon from "../../icons/enter.svg"

import style from "../../css/nav_components/login.module.css"

const Login = () => {
    const navStyle = {
        textDecoration: "none",
        color: "black"
    }
    return (
        <div className={style.login_container}>
            <Link style={navStyle} to="/login">
                <LoginForm />
            </Link>
            <img className={style.icon} src={Icon} alt="login" />
        </div>
    )
}

export default Login;
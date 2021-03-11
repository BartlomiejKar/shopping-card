import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import style from "./loginForm.module.css"

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <div className={style.container}>
            <button className={style.loginContainerButton} onClick={() => loginWithRedirect()}>Zaloguj</button>
        </div>
    )
}
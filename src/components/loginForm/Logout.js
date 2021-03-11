import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"

import style from "./loginForm.module.css"
export const Logout = () => {
    const { logout } = useAuth0()
    return (
        <div className={style.container}>
            <button className={style.logoutContainerButton} onClick={() => logout()}>Wyloguj</button>
        </div>
    )
}
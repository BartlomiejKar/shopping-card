import React from 'react';
import { LoginButton } from './LoginButton';
import { Logout } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react"

export const LoginForm = () => {
    const { isAuthenticated } = useAuth0();

    const authenticated = isAuthenticated ? <Logout /> : <LoginButton />
    return (
        <>
            {authenticated}
        </>
    )
}
import React from 'react';

export const LoginForm = () => {
    return (
        <form type="onSubmit">
            <div>
                <label />
                <input type="email" placeholder="e-mail" required />
            </div>
            <div>
                <label />
                <input type="password" placeholder="hasło" required />
            </div>
            <button type="submit">Zaloguj</button>
        </form>
    )
}
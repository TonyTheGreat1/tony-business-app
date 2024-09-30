import React from 'react';
import { useAuth } from './authContext';

const LogoutButton = () => {
    const { logout, isLoggedIn } = useAuth();

    return (
        <>
            {isLoggedIn() ? (
                <button onClick={logout}>Logout</button>
            ) : null}
        </>
    );
};

export default LogoutButton;
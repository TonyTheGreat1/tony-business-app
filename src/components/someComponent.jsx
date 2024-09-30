import React from 'react';
import { useAuth } from './authContext';

const SomeComponent = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            {isLoggedIn() ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>
    );
};

export default SomeComponent;
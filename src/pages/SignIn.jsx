import React, { useState } from 'react';
import { useAuth } from '../components/authContext';

const signIn = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            login(data);
            alert('Login successful!');
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="signin">
                <h2 className="">sign in</h2>
                <p>sign in with an existing account</p>

                <div>
                    <label htmlFor="">Email</label>
                    <input className="input" type="email" placeholder="tCard@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">sign in</button>
            </div>

        </form>
    )
}

export default signIn
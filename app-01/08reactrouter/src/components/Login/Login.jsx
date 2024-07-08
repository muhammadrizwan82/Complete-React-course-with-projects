import React, { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    usePageTitle('Home - Login')
    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (username === '' || password === '') {
            setError('Please enter both username and password.');
            return;
        }

        // Reset error state
        setError('');

        // Handle form submission
        // Here, you can add your authentication logic
        console.log('Username:', username);
        console.log('Password:', password);

        // Clear form inputs
        setUsername('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-white mb-4">Login</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-white mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import styles from './Login.module.css';
import { loginUser } from '@api/UserApi';
import { useNavigate } from 'react-router-dom'; // Adjust the path based on your project structure

const Login = () => {
    const [username, setUsername] = useState(''); // This can be email or username
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await loginUser({ email: username, password }); // Send email instead of username
            localStorage.setItem('token', data); // Store token in local storage (if applicable)
            console.log("Login successful:", data);
            navigate("/");
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid email or password"); // Adjusted error message for clarity
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                {error && <p className={styles.errorText}>{error}</p>}
                <input
                    id="username"
                    type="text"
                    placeholder="Email or username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className={styles.loginButton} onClick={handleLogin}>Log in</button>
                <div className={styles.loginFooter}>
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;

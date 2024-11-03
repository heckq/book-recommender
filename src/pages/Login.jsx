import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    const handleLogin = () => {

        console.log("Login clicked");
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <input
                    id="username"
                    type="text"
                    placeholder="Email or username"
                    required
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                />
                <button className={styles.loginButton} onClick={handleLogin}>Log in</button>
                <div className={styles.loginFooter}>
                    Don't have an account? <a href="/src/pages/Signup">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Login;

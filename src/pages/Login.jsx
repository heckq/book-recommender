import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <input
                    type="text"
                    placeholder="Email or username"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                />
                <button className="login-button">Log in</button>
                <div className="login-footer">
                    Don't have an account?<a href="/src/pages/Signup">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Login;


import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <input
                    type="text"
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    required
                />
                <button className="signup-button">Sign up</button>
                <div className="signup-footer">
                    Already have an account? <a href="/src/pages/Login">Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;

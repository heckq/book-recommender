import React, { useState } from 'react';
import styles from './Signup.module.css';
import { signupUser } from '@api/UserApi';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const data = await signupUser({ email, username, password });
            console.log("Signup successful:", data);
            setSuccess("Account created successfully! You can now log in.");
            setError('');
        } catch (err) {
            console.error("Signup failed:", err);
            setError("Failed to create account. Please try again.");
        }
    };

    return (
        <div className={styles.signupPage}>
            <div className={styles.signupContainer}>
                {error && <p className={styles.errorText}>{error}</p>}
                {success && <p className={styles.successText}>{success}</p>}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button className={styles.signupButton} onClick={handleSignup}>Sign up</button>
                <div className={styles.signupFooter}>
                    Already have an account? <a href="/login">Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;

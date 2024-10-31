import React from 'react';
import styles from './Signup.module.css';

const Signup = () => {
    const handleSignup = () => {

        console.log("Signup clicked");
    };

    return (
        <div className={styles.signupPage}>
            <div className={styles.signupContainer}>
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm password" required />
                <button className={styles.signupButton} onClick={handleSignup}>Sign up</button>
                <div className={styles.signupFooter}>
                    Already have an account? <a href="/Login">Log in</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;

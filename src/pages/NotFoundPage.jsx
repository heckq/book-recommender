import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" className={styles.homeLink}>Go back to Home</a>
        </div>
    );
};

export default NotFound;

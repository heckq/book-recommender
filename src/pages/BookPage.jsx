import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bookIcon from '../assets/images/book-icon.png';
import favoriteIcon from '../assets/images/favorite-icon.jpg';
import readLaterIcon from '../assets/images/read-later-icon.jpg';
import profileIcon from '../assets/images/profile-picture.jpg';
import homeIcon from '../assets/images/home.jpg';
import styles from './BookPage.module.css';

const BookPage = () => {
    const { state } = useLocation();
    const book = state?.book; // Отримуємо дані книги з state
    const navigate = useNavigate();

    useEffect(() => {
        if (!book) {
            console.error("No book data available");
        }
    }, [book]);

    const handleProfileClick = () => {
        console.log("Profile clicked");
        navigate('/profile'); // Перехід на сторінку профілю
    };

    const handleHomeClick = () => {
        console.log("Home clicked");
        navigate('/'); // Перехід на домашню сторінку
    };

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.bookPage}>
            <div className={styles.leftPanel}>
                <div className={styles.topButtons}>
                    <button className={styles.navButton} onClick={handleProfileClick}>
                        <img src={profileIcon} alt="Profile" />
                    </button>
                    <button className={styles.navButton} onClick={handleHomeClick}>
                        <img src={homeIcon} alt="Home" />
                    </button>
                </div>

                <img src={bookIcon} alt="Book Icon" className={styles.bookIcon} />
                <div className={styles.scroll}>
                    <img src={favoriteIcon} alt="Add to Favorites" className={styles.scrollIcon} />
                    <img src={readLaterIcon} alt="Add to Read Later" className={styles.scrollIcon} />
                </div>
            </div>

            <div className={styles.rightPanel}>
                <div className={styles.bookInfo}>
                    <h1>{book.title}</h1>
                    <h2>{book.authors ? book.authors.join(', ') : "Unknown Author"}</h2>
                    <p className={styles.genres}>{book.category}</p>
                     <p className={styles.description}>{book.description}</p> {/* Опис */}
                </div>
            </div>
        </div>
    );
};

export default BookPage;

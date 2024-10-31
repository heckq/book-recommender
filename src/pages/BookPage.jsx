import React from 'react';
import bookIcon from '../assets/images/book-icon.jpg';
import favoriteIcon from '../assets/images/favorite-icon.jpg';
import readLaterIcon from '../assets/images/read-later-icon.jpg';
import profileIcon from '../assets/images/profile-picture.jpg';
import homeIcon from '../assets/images/home.jpg';
import styles from './BookPage.module.css';

const BookPage = () => {
    const handleProfileClick = () => {
        console.log("Profile clicked");
    };

    const handleHomeClick = () => {
        console.log("Home clicked");
    };

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
                    <h1>Harry Potter and the Chamber of Secrets</h1>
                    <h2>J.K. Rowling</h2>
                    <p className={styles.genres}>Fantasy, fiction, young adult, magic, children's, middle grade, audiobook, adventure, classics, science fiction fantasy</p>
                    <p className={styles.description}>
                        Since Harry Potter had come home for the summer, all he wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. The real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy? Maybe it was Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookPage;

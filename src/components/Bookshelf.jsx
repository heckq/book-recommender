import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './Bookshelf.module.css';
import spiderWebImg from '../assets/images/spider-web.jpg';

const books = [
    "Blood Meridian", "I have no mouth...", "Silence of the lambs",
    "The Hobbit", "Alice in Wonderland", "Don Quixote", "The Picture of Dorian Gray",
    "Alcoholics Anonymous", "The Little Prince", "The Alchemist",
    "Storm of Steel", "The Lord of the Rings", "The Godfather"
];

const colors = ['#A7876B', '#916B47', '#8B6955'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomHeight = () => {
    return Math.floor(Math.random() * (35) + 30);
};

const BookShelf = ({ isProfilePage, genre }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const displayBooks = !isProfilePage && books.length > 0;

    const handleBookClick = (bookTitle) => {
        console.log(`Navigating to book: ${bookTitle}`);
        navigate('*'); // Navigate to NotFoundPage when a book is clicked
    };

    return (
        <div className={styles.bookshelfContainer}>
            <div className={styles.bookshelf}>
                {displayBooks ? (
                    books.map((book, index) => {
                        const randomColor = getRandomColor();
                        const randomHeight = getRandomHeight();

                        return (
                            <div
                                key={book}
                                className={styles.book}
                                style={{
                                    backgroundColor: randomColor,
                                    height: `${randomHeight}vh`,
                                    maxHeight: '45vh',
                                }}
                                onClick={() => handleBookClick(book)}
                            >
                                <span className={styles.bookTitle}>{book}</span>
                            </div>
                        );
                    })
                ) : (
                    <div className={styles.emptyShelf}>
                        <img src={spiderWebImg} alt="Empty shelf with spider web" className={styles.spiderWebImage} />
                    </div>
                )}
            </div>
            <div className={styles.genreBorder}>
                <span>{genre}</span>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    isProfilePage: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
};

export default BookShelf;

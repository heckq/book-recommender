import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Bookshelf.module.css';
import spiderWebImg from '../assets/images/spider-web.jpg';

const colors = ['#A7876B', '#916B47', '#8B6955'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomHeight = () => {
    return Math.floor(Math.random() * (35) + 30);
};

const BookShelf = ({ isProfilePage, genre, books }) => {
    const navigate = useNavigate();

    const displayBooks = !isProfilePage && Array.isArray(books) && books.length > 0;

    const handleBookClick = (book) => {
        console.log(`Navigating to book: ${book.title}`);
        navigate(`/book/${book.title}`, { state: { book } }); // Передаємо всі дані книги
    };

    return (
        <div className={styles.bookshelfContainer}>
            <div className={styles.bookshelf}>
                {displayBooks ? (
                    books.map((book) => {
                        const randomColor = getRandomColor();
                        const randomHeight = getRandomHeight();

                        return (
                            <div
                                key={book.id} // Ensure 'id' is unique for each book
                                className={styles.book}
                                style={{
                                    backgroundColor: randomColor,
                                    height: `${randomHeight}vh`,
                                    maxHeight: '45vh',
                                }}
                                onClick={() => handleBookClick(book)} // Передаємо весь об'єкт book
                            >
                                <span className={styles.bookTitle}>{book.title}</span>
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
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string,
        category: PropTypes.string,
        publisher: PropTypes.string,
        publish_date: PropTypes.string,
        price: PropTypes.number,
    })).isRequired,
};

export default BookShelf;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = ({ title, color, height, onClick }) => {
    return (
        <div
            className={styles.book}
            style={{
                backgroundColor: color,
                height: `${height}vh`,
                maxHeight: '45vh',
            }}
            onClick={onClick}
        >
            <span className={styles.bookTitle}>{title}</span>
        </div>
    );
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Book;

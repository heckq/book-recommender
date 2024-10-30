import React from 'react';
import './Book.css';

const Book = ({ title, color, height, onClick }) => {
    return (
        <div
            className="book"
            style={{
                backgroundColor: color,
                height: `${height}vh`,
                maxHeight: '45vh',
            }}
            onClick={onClick}
        >
            <span className="book-title">{title}</span>
        </div>
    );
};

export default Book;

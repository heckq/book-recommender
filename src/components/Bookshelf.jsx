import React from 'react';
import './BookShelf.css';
import spiderWebImg from '../assets/images/spider-web.jpg';

// Масив книг, який може бути пустим
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
    return Math.floor(Math.random() * (35) + 30); // Випадкова висота між 30vh і 65vh
};

const BookShelf = ({ isProfilePage, genre }) => {
    // Якщо це сторінка профілю, показуємо пусту полицю
    const displayBooks = !isProfilePage && books.length > 0;

    const handleBookClick = (bookTitle) => {
        // Додайте логіку навігації на сторінку книги
        console.log(`Navigating to book: ${bookTitle}`);
    };

    return (
        <div className="bookshelf-container">
            <div className="bookshelf">
                {displayBooks ? (
                    books.map((book, index) => {
                        const randomColor = getRandomColor();
                        const randomHeight = getRandomHeight();

                        return (
                            <div
                                key={index}
                                className="book"
                                style={{
                                    backgroundColor: randomColor,
                                    height: `${randomHeight}vh`,
                                    maxHeight: '45vh',
                                }}
                                onClick={() => handleBookClick(book)} // Обробник натискання
                            >
                                <span className="book-title">{book}</span>
                            </div>
                        );
                    })
                ) : (
                    <div className="empty-shelf">
                        <img src={spiderWebImg} alt="Empty shelf with spider web" className="spider-web-image" />
                    </div>
                )}
            </div>
            <div className="genre-border">
                <span>{genre}</span> {/* Відображення жанру */}
            </div>
        </div>
    );
};

export default BookShelf;

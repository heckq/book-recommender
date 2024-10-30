import React from 'react';
import bookIcon from '../assets/images/book-icon.jpg';
import favoriteIcon from '../assets/images/favorite-icon.jpg';
import readLaterIcon from '../assets/images/read-later-icon.jpg';
import profileIcon from '../assets/images/profile-picture.jpg';
import homeIcon from '../assets/images/home.jpg';
import './BookPage.css';

const BookPage = () => {
    return (
        <div className="book-page">
            {/* Left Panel */}
            <div className="left-panel">
                <div className="top-buttons">
                    <button className="nav-button">
                        <img src={profileIcon} alt="Profile" />
                    </button>
                    <button className="nav-button">
                        <img src={homeIcon} alt="Home" />
                    </button>
                </div>

                <img src={bookIcon} alt="Book Icon" className="book-icon" />
                <div className="scroll">
                    <img src={favoriteIcon} alt="Add to Favorites" className="scroll-icon" />
                    <img src={readLaterIcon} alt="Add to Read Later" className="scroll-icon" />
                </div>
            </div>

            {/* Right Panel */}
            <div className="right-panel">

                <div className="book-info">
                    <h1>Harry Potter and the Chamber of Secrets</h1>
                    <h2>J.K. Rowling</h2>
                    <p className="genres">Fantasy, fiction, young adult, magic, children's, middle grade, audiobook, adventure, classics, science fiction fantasy</p>
                    <p className="description">
                        Since Harry Potter had come home for the summer, all he wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.And strike it does. The real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy? Maybe it was Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookPage;

import React from 'react';
import closedScrollImg from '../assets/images/closed-scroll.jpg'; // Path to the closed scroll image
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
    const handleSearchClick = () => {
        // Додайте логіку обробки натискань на кнопку
        console.log("Search button clicked");
    };

    return (
        <div className="search-bar">
            <button onClick={handleSearchClick} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img src={closedScrollImg} alt="Scroll Search" className="scroll-image" />
            </button>
        </div>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import closedScrollImg from '../assets/images/closed-scroll.jpg';
import openScrollImg from '../assets/images/open-scroll.jpg';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSearchClick = () => {
        setIsOpen((prevState) => !prevState);
        console.log("Search button clicked");
    };

    return (
        <div className={styles.searchBar}>
            <button onClick={handleSearchClick} style={{ background: 'none', border: 'none', padding: 0 }}>
                <div className={styles.scrollContainer}>
                    <img
                        src={isOpen ? openScrollImg : closedScrollImg}
                        alt="Scroll Search"
                        className={styles.scrollImage}
                    />
                </div>
            </button>
        </div>
    );
};

export default SearchBar;

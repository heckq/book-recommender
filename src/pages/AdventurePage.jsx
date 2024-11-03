import React, { useEffect, useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './AdventurePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const AdventurePage = () => {
    const [books, setBooks] = useState([]);
    const genre = "Adventure books!";
    const tmp = "Adventure";

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost:8000/book/genre/${tmp}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Accessing books correctly from data
                if (Array.isArray(data.books)) {
                    setBooks(data.books);
                    localStorage.setItem('adventureBooks', JSON.stringify(data.books)); // Save to localStorage
                } else {
                    console.error("Expected an array but received:", data.books);
                    setBooks([]);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
                setBooks([]);
            }
        };

        // Try to get books from localStorage first
        const storedBooks = localStorage.getItem('adventureBooks');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks)); // Load from localStorage
        } else {
            fetchBooks(); // Fetch from the API if not in localStorage
        }
    }, []); // Empty dependency array to run once on mount

    return (
        <div className={styles.adventurePage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre={genre} books={books} />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default AdventurePage;

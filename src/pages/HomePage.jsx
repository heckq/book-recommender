import React, { useEffect, useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './HomePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const genre = "Popular books!";
    const tmp = "Fiction";
    useEffect(() => {
        const fetchPopularBooks = async () => {
            try {
                const response = await fetch(`http://localhost:8000/book/genre/${tmp}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Access the books array directly from the returned object
                if (Array.isArray(data.books)) {
                    setBooks(data.books); // Set the state with the books array
                    localStorage.setItem('popularBooks', JSON.stringify(data.books)); // Save to localStorage
                } else {
                    console.error("Expected an array but received:", data.books);
                    setBooks([]);
                }
            } catch (error) {
                console.error("Error fetching popular books:", error);
                setBooks([]);
            }
        };

        // Try to get books from localStorage first
        const storedBooks = localStorage.getItem('popularBooks');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks)); // Load from localStorage
        } else {
            fetchPopularBooks(); // Fetch from the API if not in localStorage
        }
    }, []); // Empty dependency array to run once on mount

    return (
        <div className={styles.homePage}>
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

export default HomePage;

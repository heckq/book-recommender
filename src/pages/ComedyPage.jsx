import React, { useEffect, useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './ComedyPage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const ComedyPage = () => {
    const [books, setBooks] = useState([]); // State for books
    const genre = "Comedy books!"; // Genre title
    const tmp = "Comedy"; // Variable for genre

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost:8000/book/genre/${tmp}`); // API request
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Include status for debugging
                }
                const data = await response.json();

                // Check if data contains books
                if (data.books && Array.isArray(data.books)) {
                    setBooks(data.books); // Set state with books array
                    localStorage.setItem('comedyBooks', JSON.stringify(data.books)); // Save to localStorage
                } else {
                    console.error("Expected an array of books but received:", data.books);
                    setBooks([]); // Set empty if the response is incorrect
                }
            } catch (error) {
                console.error("Error fetching books:", error);
                setBooks([]); // Set empty in case of error
            }
        };

        // Try to get books from localStorage first
        const storedBooks = localStorage.getItem('comedyBooks');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks)); // Load from localStorage
        } else {
            fetchBooks(); // Fetch from the API if not in localStorage
        }
    }, []); // Empty dependency array to run once

    return (
        <div className={styles.comedyPage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre={genre} books={books} /> {/* Pass books to Bookshelf */}
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default ComedyPage;

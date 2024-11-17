import React, { useEffect, useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './WarPage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const WarPage = () => {
    const [books, setBooks] = useState([]);
    const genre = "Military books!";
    const tmp = "Military";

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost:8000/book/genre/${tmp}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched war books:', data);

                if (Array.isArray(data.books)) {
                    setBooks(data.books);
                    localStorage.setItem('warBooks', JSON.stringify(data.books)); // Save to localStorage
                } else {
                    console.error("Expected an array but received:", data.books);
                    setBooks([]);
                }
            } catch (error) {
                console.error("Error fetching war books:", error);
                setBooks([]);
            }
        };

        // Try to get books from localStorage first
        const storedBooks = localStorage.getItem('warBooks');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks)); // Load from localStorage
        } else {
            fetchBooks(); // Fetch from the API if not in localStorage
        }
    }, []);

    return (
        <div className={styles.warPage}>
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

export default WarPage;

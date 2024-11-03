import React, { useEffect, useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './RomancePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const RomancePage = () => {
    const [books, setBooks] = useState([]);
    const genre = "Romance books!";
    const tmp = "Romance";

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost:8000/book/genre/${tmp}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched romance books:', data);

                if (Array.isArray(data.books)) {
                    setBooks(data.books);
                    localStorage.setItem('romanceBooks', JSON.stringify(data.books)); // Save to localStorage
                } else {
                    console.error("Expected an array but received:", data.books);
                    setBooks([]);
                }
            } catch (error) {
                console.error("Error fetching romance books:", error);
                setBooks([]);
            }
        };

        // Try to get books from localStorage first
        const storedBooks = localStorage.getItem('romanceBooks');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks)); // Load from localStorage
        } else {
            fetchBooks(); // Fetch from the API if not in localStorage
        }
    }, []);

    return (
        <div className={styles.romancePage}>
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

export default RomancePage;

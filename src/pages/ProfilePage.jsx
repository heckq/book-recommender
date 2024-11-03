import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenreNav from '../components/GenreNav';
import styles from './ProfilePage.module.css';
import Bookshelf from '../components/Bookshelf';
import RightPanelScroll from '../components/RightPanelScroll';
import profilePicture from '../assets/images/profile-picture.jpg';

const UserProfilePage = () => {
    const [selectedGenre, setSelectedGenre] = useState("Favorite Books!");
    const [user, setUser] = useState(null); // State to hold user data
    const [error, setError] = useState(null); // State to hold error messages

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                if (!token) {
                    throw new Error("No token found. User is not authenticated.");
                }

                const response = await axios.get('http://localhost:8000/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token in the Authorization header
                    }
                });

                setUser(response.data); // Set the user data state
            } catch (err) {
                setError(err.response?.data?.detail || err.message); // Capture any error message
                console.error("Error fetching user profile:", err); // Log the error
            }
        };

        fetchUserProfile(); // Call the function to fetch user profile on component mount
    }, []); // Empty dependency array to run once on mount

    return (
        <div className={styles.profilePage}>
            <GenreNav />
            <div className={styles.content}>
                <div className={styles.profileContainer}>
                    <img
                        src={profilePicture}
                        alt="Profile"
                        className={styles.profileImage}
                    />
                    <div className={styles.username}>
                        {error ? (
                            <p>Error: {error}</p> // Display error if exists
                        ) : (
                            user ? user.name : "Loading..." // Display user name or loading message
                        )}
                    </div>
                </div>
                <Bookshelf isProfilePage={true} genre={selectedGenre} />
            </div>
            <RightPanelScroll onGenreChange={handleGenreChange} />
        </div>
    );
};

export default UserProfilePage;

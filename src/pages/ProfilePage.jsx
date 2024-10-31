import React, { useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './ProfilePage.module.css';
import Bookshelf from '../components/Bookshelf';
import RightPanelScroll from '../components/RightPanelScroll';
import profilePicture from '../assets/images/profile-picture.jpg';

const UserProfilePage = () => {
    const [selectedGenre, setSelectedGenre] = useState("Favorite Books!");


    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

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
                        Username
                    </div>
                </div>
                <Bookshelf isProfilePage={true} genre={selectedGenre} />
            </div>
            <RightPanelScroll onGenreChange={handleGenreChange} />
        </div>
    );
};

export default UserProfilePage;

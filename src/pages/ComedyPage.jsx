import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './ComedyPage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const ComedyPage = () => {
    return (
        <div className={styles.comedyPage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="Comedy books!" />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default ComedyPage;

import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './HomePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="Popular books!" />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default HomePage;

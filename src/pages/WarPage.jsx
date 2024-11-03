import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './WarPage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const WarPage = () => {
    return (
        <div className={styles.warPage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="War books!" />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default WarPage;

import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './RomancePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const RomancePage = () => {
    return (
        <div className={styles.romancePage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="Romance books!" />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default RomancePage;

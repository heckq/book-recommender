import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './HorrorPage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const HorrorPage = () => {
    return (
        <div className={styles.horrorPage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="Horror books!" />
                </div>
            </div>
            <ProfileIcon />
        </div>
    );
};

export default HorrorPage;

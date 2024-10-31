import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './AdventurePage.module.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const AdventurePage = () => {
    return (
        <div className={styles.adventurePage}>
            <GenreNav />
            <div className={styles.content}>
                <SearchBar />
                <div className={styles.bookshelfContainer}>
                    <Bookshelf isProfilePage={false} genre="Adventure books!" />
                </div>
                </div>
                <ProfileIcon />
            </div>
            );
            };

            export default AdventurePage;
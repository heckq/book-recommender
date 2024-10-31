import React from 'react';
import GenreNav from '../components/GenreNav';
import styles from './ProfilePage.module.css';
import Bookshelf from '../components/Bookshelf';
import RightPanelScroll from '../components/RightPanelScroll';
import profilePicture from '../assets/images/profile-picture.jpg';

const UserProfilePage = () => {
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
                <Bookshelf isProfilePage={true} genre="Your Books!" />
            </div>
            <RightPanelScroll />
        </div>
    );
};

export default UserProfilePage;

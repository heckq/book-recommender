import React from 'react';
import styles from './ProfileIcon.module.css';
import profileImg from '../assets/images/profile-picture.jpg';

const ProfileIcon = () => {
    const handleProfileClick = () => {
        console.log("Profile icon clicked");
    };

    return (
        <div className={styles.profileIconContainer}>
            <button onClick={handleProfileClick} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img
                    src={profileImg}
                    alt="Profile Icon"
                    className={styles.profileIcon}
                />
            </button>
        </div>
    );
};

export default ProfileIcon;

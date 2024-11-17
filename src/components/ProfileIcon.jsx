import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileIcon.module.css';
import profileImg from '../assets/images/profile-picture.jpg';

const ProfileIcon = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile'); // Navigate to the profile page
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

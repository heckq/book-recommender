import React from 'react';
import './ProfileIcon.css';
import profileImg from '../assets/images/profile-picture.jpg'; // Імпортуємо зображення іконки профілю

const ProfileIcon = () => {
    const handleProfileClick = () => {
        // Додайте логіку обробки натискань на кнопку
        console.log("Profile icon clicked");
    };

    return (
        <div className="profile-icon-container">
            <button onClick={handleProfileClick} style={{ background: 'none', border: 'none', padding: 0 }}>
                <img
                    src={profileImg}
                    alt="Profile Icon"
                    className="profile-icon"
                />
            </button>
        </div>
    );
};

export default ProfileIcon;

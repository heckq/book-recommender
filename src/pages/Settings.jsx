import React, { useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './Settings.module.css';
import profilePicture from '../assets/images/profile-picture.jpg'; // Заміна на актуальне зображення профілю

const Settings = () => {
    const [username, setUsername] = useState('Current Username'); // Змініть на актуальне ім'я
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState(profilePicture); // Стартове зображення

    const handleUpdate = () => {
        console.log("Settings updated");
        // Тут можна додати логіку для оновлення даних
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.settingsPage}>
            <GenreNav /> {/* Розміщення навігації жанрів */}
            <div className={styles.content}>
                <div className={styles.profileContainer}>
                    <div className={styles.avatarContainer}>
                        <img src={avatar} alt="Profile" className={styles.avatar} />
                        <label htmlFor="avatarInput" className={styles.avatarLabel}>Change Avatar</label>
                        <input
                            type="file"
                            id="avatarInput"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className={styles.avatarInput}
                        />
                    </div>
                    <div className={styles.settingsForm}>
                        <input
                            type="text"
                            placeholder="New Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button className={styles.updateButton} onClick={handleUpdate}>Update Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

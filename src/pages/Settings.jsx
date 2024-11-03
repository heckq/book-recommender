// src/pages/Settings.jsx
import React, { useState } from 'react';
import GenreNav from '../components/GenreNav';
import styles from './Settings.module.css';
import profilePicture from '../assets/images/profile-picture.jpg';
import { updateUserProfile } from '@api/UserApi';

const Settings = () => {
    const userId = 1; // ID користувача (можливо, буде динамічним, залежно від авторизації)
    const [username, setUsername] = useState('Current Username');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState(profilePicture);
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
        const userData = {
            username,
            password,
            avatar, // Можливо, потрібно буде відправити шлях або іншу форму даних
        };
        try {
            await updateUserProfile(userId, userData);
            setMessage("Settings updated successfully!");
        } catch (error) {
            setMessage("Failed to update settings. Please try again.");
        }
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
            <GenreNav />
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
                        {message && <p className={styles.message}>{message}</p>}
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

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Імпортуємо Link
import styles from './RightPanelScroll.module.css';
import favoriteImg from '../assets/images/favorite-icon.jpg';
import readLaterImg from '../assets/images/read-later-icon.jpg';
import settingsImg from '../assets/images/settings-icon.jpg';

const RightPanelScroll = ({ onGenreChange }) => {
    const icons = [
        { name: 'Favorite Books', img: favoriteImg },
        { name: 'Read Later', img: readLaterImg },
        { name: 'Settings', img: settingsImg, path: '/settings' } // Додаємо шлях для налаштувань
    ];

    const handleIconClick = (name) => {
        if (name === 'Favorite Books' || name === 'Read Later') {
            onGenreChange(name);
        }
        console.log(`${name} clicked`);
    };

    return (
        <div className={styles.rightPanelScroll}>
            <ul className={styles.iconList}>
                {icons.map((icon) => (
                    <li key={icon.name} className={styles.iconItem}>
                        {icon.path ? (
                            <Link to={icon.path} style={{ background: 'none', border: 'none', padding: 0 }}>
                                <button
                                    onClick={() => handleIconClick(icon.name)}
                                    style={{ background: 'none', border: 'none', padding: 0 }}
                                >
                                    <img src={icon.img} alt={icon.name} className={styles.iconImage} />
                                </button>
                            </Link>
                        ) : (
                            <button
                                onClick={() => handleIconClick(icon.name)}
                                style={{ background: 'none', border: 'none', padding: 0 }}
                            >
                                <img src={icon.img} alt={icon.name} className={styles.iconImage} />
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

RightPanelScroll.propTypes = {
    onGenreChange: PropTypes.func.isRequired,
};

export default RightPanelScroll;

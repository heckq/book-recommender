import React from 'react';
import styles from './RightPanelScroll.module.css';
import favoriteImg from '../assets/images/favorite-icon.jpg';
import readLaterImg from '../assets/images/read-later-icon.jpg';
import settingsImg from '../assets/images/settings-icon.jpg';

const RightPanelScroll = () => {
    const icons = [
        { name: 'Favorite', img: favoriteImg },
        { name: 'ReadLater', img: readLaterImg },
        { name: 'Settings', img: settingsImg },
    ];

    const handleClick = (name) => {

        console.log(`${name} clicked`);
    };

    return (
        <div className={styles.rightPanelScroll}>
            <ul className={styles.iconList}>
                {icons.map((icon) => (
                    <li key={icon.name} className={styles.iconItem}>
                        <button onClick={() => handleClick(icon.name)} style={{ background: 'none', border: 'none', padding: 0 }}>
                            <img src={icon.img} alt={icon.name} className={styles.iconImage} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightPanelScroll;

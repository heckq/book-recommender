import React from 'react';
import './RightPanelScroll.css';
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
        // Додайте логіку обробки натискань
        console.log(`${name} clicked`);
    };

    return (
        <div className="right-panel-scroll">
            <ul className="icon-list">
                {icons.map((icon) => (
                    <li key={icon.name} className="icon-item">
                        <button onClick={() => handleClick(icon.name)} style={{ background: 'none', border: 'none', padding: 0 }}>
                            <img src={icon.img} alt={icon.name} className="icon-image" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightPanelScroll;

import React from 'react';
import './GenreNav.css';
import homeImg from '../assets/images/home.jpg';
import horrorImg from '../assets/images/horror.jpg';
import adventureImg from '../assets/images/adventure.jpg';
import romanceImg from '../assets/images/romance.jpg';
import warImg from '../assets/images/war.jpg';
import comedyImg from '../assets/images/comedy.jpg';

const GenreNav = () => {
    const genres = [
        { name: 'HomePage', img: homeImg },
        { name: 'Horror', img: horrorImg },
        { name: 'Adventure', img: adventureImg },
        { name: 'Romance', img: romanceImg },
        { name: 'War', img: warImg },
        { name: 'Comedy', img: comedyImg },
    ];

    const handleGenreClick = (genre) => {
        // Додайте логіку обробки натискань жанрів
        console.log(`${genre} clicked`);
    };

    return (
        <nav className="genre-nav">
            <ul>
                {genres.map((genre) => (
                    <li key={genre.name}>
                        <button onClick={() => handleGenreClick(genre.name)} style={{ background: 'none', border: 'none', padding: 0 }}>
                            <img src={genre.img} alt={genre.name} className="genre-image" />
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default GenreNav;

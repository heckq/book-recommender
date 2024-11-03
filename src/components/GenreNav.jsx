import React from 'react';
import PropTypes from 'prop-types';
import styles from './GenreNav.module.css';
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
        console.log(`${genre} clicked`);
    };

    return (
        <nav className={styles.genreNav}>
            <ul>
                {genres.length === 0 ? (
                    <li>No genres available</li>
                ) : (
                    genres.map((genre) => (
                        <li key={genre.name}>
                            <button onClick={() => handleGenreClick(genre.name)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                <img src={genre.img} alt={genre.name} className={styles.genreImage} />
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
};

GenreNav.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ),
};

export default GenreNav;

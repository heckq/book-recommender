import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Імпортуємо Link
import styles from './GenreNav.module.css';
import homeImg from '../assets/images/home.jpg';
import horrorImg from '../assets/images/horror.jpg';
import adventureImg from '../assets/images/adventure.jpg';
import romanceImg from '../assets/images/romance.jpg';
import warImg from '../assets/images/war.jpg';
import comedyImg from '../assets/images/comedy.jpg';

const GenreNav = () => {
    const genres = [
        { name: 'HomePage', img: homeImg, path: '/' },
        { name: 'Horror', img: horrorImg, path: '/horror' },
        { name: 'Adventure', img: adventureImg, path: '/adventure' },
        { name: 'Romance', img: romanceImg, path: '/romance' },
        { name: 'War', img: warImg, path: '/war' },
        { name: 'Comedy', img: comedyImg, path: '/comedy' },
    ];

    return (
        <nav className={styles.genreNav}>
            <ul>
                {genres.length === 0 ? (
                    <li>No genres available</li>
                ) : (
                    genres.map((genre) => (
                        <li key={genre.name}>
                            <Link to={genre.path} style={{ background: 'none', border: 'none', padding: 0 }}>
                                <img src={genre.img} alt={genre.name} className={styles.genreImage} />
                            </Link>
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
            path: PropTypes.string,
        })
    ),
};

export default GenreNav;

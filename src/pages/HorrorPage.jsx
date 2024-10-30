import React from 'react';
import GenreNav from '../components/GenreNav';
import './HorrorPage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const HorrorPage = () => {
    return (
        <div className="horror-page"> {/* Update the class name if necessary */}
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="Horror books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default HorrorPage; // Ensure this matches the new component name

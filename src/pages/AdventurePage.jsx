import React from 'react';
import GenreNav from '../components/GenreNav';
import './AdventurePage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const AdventurePage = () => {
    return (
        <div className="adventure-page"> {/* Update the class name if necessary */}
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="Adventure books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default AdventurePage; // Ensure this matches the new component name

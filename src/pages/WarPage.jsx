import React from 'react';
import GenreNav from '../components/GenreNav';
import './WarPage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const WarPage = () => {
    return (
        <div className="war-page"> {/* Update the class name if necessary */}
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="War books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default WarPage; // Ensure this matches the new component name

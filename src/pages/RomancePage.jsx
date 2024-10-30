import React from 'react';
import GenreNav from '../components/GenreNav';
import './RomancePage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const RomancePage = () => {
    return (
        <div className="romance-page"> {/* Update the class name if necessary */}
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="Romance books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default RomancePage; // Ensure this matches the new component name

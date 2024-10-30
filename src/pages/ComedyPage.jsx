import React from 'react';
import GenreNav from '../components/GenreNav';
import './ComedyPage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const ComedyPage = () => {
    return (
        <div className="comedy-page"> {/* Update the class name if necessary */}
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="Comedy books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default ComedyPage; // Ensure this matches the new component name

import React from 'react';
import GenreNav from '../components/GenreNav';
import './HomePage.css';
import SearchBar from '../components/SearchBar';
import Bookshelf from '../components/Bookshelf';
import ProfileIcon from '../components/ProfileIcon';

const HomePage = () => {
    return (
        <div className="home-page">
            <GenreNav />
            <div className="content">
                <SearchBar />
                <Bookshelf isProfilePage={false} genre="Popular books!" />
            </div>
            <ProfileIcon />
        </div>
    );
};

export default HomePage;

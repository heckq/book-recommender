import React from 'react';
import GenreNav from '../components/GenreNav';
import Bookshelf from '../components/Bookshelf';
import RightPanelScroll from '../components/RightPanelScroll';
import './ProfilePage.css';
import pfp from '../assets/images/profile-picture.jpg';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <GenreNav />
            <div className="content">
                <div className="profile-header">
                    <div className="profile-icon">
                        <img
                            src={pfp}
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="username">
                        Username
                    </div>
                </div>
                <Bookshelf isProfilePage={true} genre={"Favourite books"} />
            </div>
            <RightPanelScroll />
        </div>
    );
};

export default ProfilePage;

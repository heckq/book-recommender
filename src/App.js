import React from "react";
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';

import UserProfile from './pages/ProfilePage';
import ProfilePage from './pages/ProfilePage';
import HorrorPage from './pages/HorrorPage';
import BookPage from './pages/BookPage';
import AdventurePage from './pages/AdventurePage';
import ComedyPage from './pages/ComedyPage';
import RomancePage from './pages/RomancePage';

const App = () =>{
    return (
        <div>
            {/* Рендеримо сторінку логіну */}
            <HomePage />

            {/* Для перегляду сторінки реєстрації просто закоментуй Login і розкоментуй Signup */}
            {/*  */}
        </div>
    )
}

export default App
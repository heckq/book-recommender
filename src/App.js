import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';
import Settings from './pages/Settings';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import HorrorPage from './pages/HorrorPage';
import AdventurePage from './pages/AdventurePage';
import ComedyPage from './pages/ComedyPage';
import RomancePage from './pages/RomancePage';
import WarPage from './pages/WarPage';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/horror" element={<HorrorPage />} />
                <Route path="/adventure" element={<AdventurePage />} />
                <Route path="/comedy" element={<ComedyPage />} />
                <Route path="/romance" element={<RomancePage />} />
                <Route path="/war" element={<WarPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoutes from './components/ProtectedRoutes'; // Import the ProtectedRoutes component
import AdventurePage from './pages/AdventurePage';
import BookPage from './pages/BookPage';
import ComedyPage from './pages/ComedyPage';
import HomePage from './pages/HomePage';
import HorrorPage from './pages/HorrorPage';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import RomancePage from './pages/RomancePage';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import WarPage from './pages/WarPage';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/book/*" element={<BookPage />} />
                    <Route path="/horror" element={<HorrorPage />} />
                    <Route path="/adventure" element={<AdventurePage />} />
                    <Route path="/comedy" element={<ComedyPage />} />
                    <Route path="/romance" element={<RomancePage />} />
                    <Route path="/war" element={<WarPage />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;

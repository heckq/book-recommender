import React, { useEffect, useState } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@app/context/AuthContext';

const ProtectedRoutes = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [loading, setLoading] = useState(true);
    console.log(isLoggedIn);
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                setIsLoggedIn(false); // No token means not authenticated
                return;
            }

            try {
                const response = await axios.get('http://localhost:8000/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsLoggedIn(true); // Token is valid
            } catch (err) {
                console.error("Get user error:", err);
                setIsLoggedIn(false); // Token is invalid or expired
            } finally {
                setLoading(false); // Finished loading
            }
        };

        checkAuth().then();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    return (
                isLoggedIn ? (
                    <Outlet />
                ) : (
                    <Navigate to="/login" />
                )

    );
};

export default ProtectedRoutes;

import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signupUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/auth/create-user', userData);
        return response.data;
    } catch (error) {
        console.error("Signup Error:", error);
        throw error.response?.data || "Signup failed";
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/user/login', userData);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error);
        throw error.response?.data || "Login failed";
    }
};

export const getUserProfile = async (token) => {
    try {
        const response = await axiosInstance.get('/user/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Profile Error:", error);
        throw error.response?.data || "Failed to fetch profile";
    }
};

export const updateUserProfile = async (userData, token) => {
    try {
        const response = await axiosInstance.put('/user/profile', userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Update Profile Error:", error);
        throw error.response?.data || "Failed to update profile";
    }
};

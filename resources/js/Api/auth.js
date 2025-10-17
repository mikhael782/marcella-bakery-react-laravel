// resources/js/Api/auth.js
import axios from "axios";

// login
export const login = async (email, password) => {
    try {
        const response = await axios.post('/api/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// register
export const register = async (name, email, password, password_confirmation) => {
    try {
        const response = await axios.post('/api/register', {
            name,
            email,
            password,
            password_confirmation
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// logout (optional)
export const logout = async () => {
    try {
        const response = await axios.post('/api/logout');
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};
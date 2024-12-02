import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router } from 'expo-router';

const axiosClient = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_BASE_URL}/api`,
});

axiosClient.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('authToken'); // Await the token retrieval
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Set the token
            }
        } catch (error) {
            console.error('Error retrieving auth token:', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Handle request error
    }
);

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        await AsyncStorage.removeItem('authToken');
            await AsyncStorage.removeItem('userDetails');
        try {
            const { response } = error;
            
            if (response && response.status === 401) {
                
                await AsyncStorage.removeItem('authToken'); // Await the token removal
                router.push('/login');
            }
        } catch (err) {
            console.error('Error handling response error:', err);
            
            
        }
        return Promise.reject(error); // Forward the error
    }
);

export default axiosClient;

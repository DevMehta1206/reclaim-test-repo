import axios from 'axios';

export const BASE_URL = "http://localhost:50001/"
// export const BASE_URL = "https://portfolyo-backend.onrender.com/api"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' && localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            // // console.log('Unauthorized error');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance
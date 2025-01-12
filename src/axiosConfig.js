import axios from 'axios';

const SERVERIP = '192.168.1.7';

const axiosInstance = axios.create({
  baseURL: `http://${SERVERIP}:5000/api`,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;

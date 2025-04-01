import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_NEXT_API_URL;

const API = axios.create({
    baseURL: `${apiURL}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  API.interceptors.request.use((config) => {
    const cookies = document.cookie
      .split('; ')
      .find((row) => row.startsWith('userInfo='));
    const token = cookies ? decodeURIComponent(cookies.split('=')[1]) : null;
  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
  
  

  export default API;
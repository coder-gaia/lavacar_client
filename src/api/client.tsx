import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

console.log('API_URL (VITE):', import.meta.env.VITE_API_URL);

const client = axios.create({
  baseURL: "http://localhost:5000/api", //import.meta.env.VITE_API_URL as string || 
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;

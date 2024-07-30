import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_API_BASE;

const axiosInstance = axios.create({
  baseURL
});

export const apiClient = axiosInstance;

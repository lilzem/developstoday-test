import axios, { AxiosInstance } from 'axios';

export const BACKEND_URL = process.env.BACKEND_URL;

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BACKEND_URL,
});

export default axiosInstance;

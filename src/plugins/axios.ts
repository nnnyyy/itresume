import axios, { AxiosInstance } from 'axios';

const instance:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL
})

export default instance
import axios from 'axios';
export const baseUrl = 'https://prince-hotelapp-backend.onrender.com';

export const getAxiosClient = ()=> axios.create({baseUrl});
import axios from 'axios';
export const baseUrl = 'https://prince-hotelapp-backend.onrender.com';
const getAxiosClient = ()=> axios.create({baseUrl});
export default getAxiosClient;

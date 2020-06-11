import axios from 'axios';

const api = axios.create({
  baseURL: 'https://diary-app-backend.herokuapp.com/api',
});

export default api;
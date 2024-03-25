import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8181', 
});
export const micro = axios.create({
  baseURL: 'http://localhost:8081', 
});

export default api;

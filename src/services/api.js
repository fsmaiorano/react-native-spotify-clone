import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.108:3000',
});

export default api;

//We use json-server to simulate a backend with some informations.
//Verify your actual IP and update the baseURL.

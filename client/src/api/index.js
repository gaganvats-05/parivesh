import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_BASE || 'http://localhost:5500';

const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
// const API = axios.create({ baseURL: "https://bessalani-lms.herokuapp.com/" });
api.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }
  return req;
});

export const signUp = (data) => api.post('/api/register', data);
export const login = (data) => api.post('/api/login', data);
export const createProduct = (data) => api.post('api/createProduct', data);
export const getProduct = (Id) => api.get(`/api/getProd/${Id}`);
export const companyProduct = (email) => api.get(`/api/companyProd/${email}`);

export default api;
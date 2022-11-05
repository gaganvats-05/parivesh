import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_BASE || "http://localhost:5500";

const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const register = (data) => api.post("/api/register", data);
export const createProduct = (data) => api.post("api/createProduct", data);
export const getProduct = (Id) => api.get(`/api/getProd/${Id}`);
export const companyProduct = (email) => api.get(`/api/companyProd/${email}`);

export default api;

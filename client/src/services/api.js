import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchPeople = () => api.get('/people');
export const fetchPersonById = (id) => api.get(`/people/${id}`);
export const createPerson = (personData) => api.post('/people', personData);
export const updatePerson = (id, personData) => api.put(`/people/${id}`, personData);
export const deletePerson = (id) => api.delete(`/people/${id}`);

export default api;

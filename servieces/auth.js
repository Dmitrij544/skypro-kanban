import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
   return axios.post(`${API_URL}/login`, userData)
      .then(response => response.data.user)
      .catch(error => {
         const serverError = error?.response?.data?.error || error?.message || 'Login failed';
         return Promise.reject(String(serverError)); 
      });
}

export async function signUp({ name, login, password }) {
   return axios.post(API_URL, { login, name, password })
      .then(response => response.data.user)
      .catch(error => {
         console.error(error);
         const serverError = error?.response?.data?.error || error?.message || 'Registration failed';
         return Promise.reject(String(serverError)); 
      });
}

export async function fetchUsers() {
   return axios.get(API_URL)
      .then(response => {         
         return response.data.users; 
      })
      .catch(error => {
         const serverError = error?.response?.data?.error || error?.message || 'Не удалось загрузить список пользователей';
         return Promise.reject(String(serverError));
      });
}
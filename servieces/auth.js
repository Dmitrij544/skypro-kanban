import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
   const jsonBody = JSON.stringify({
      login: (userData?.login || userData?.email || '').trim(),
      password: (userData?.password || '').trim()
   });

   return axios.post(`${API_URL}/login`, jsonBody, {
      headers: {
         'Content-Type': 'text/plain' 
      }
   })
   .then(response => response.data.user)
   .catch(error => {
      const serverError = error?.response?.data?.error || 'Пользователя с такими данными нет';
      return Promise.reject(serverError); 
   });
}

export async function signUp({ name, login, password }) {
   const jsonBody = JSON.stringify({ 
      name: (name || '').trim(), 
      login: (login || '').trim(), 
      password: (password || '').trim() 
   });

   return axios.post(API_URL, jsonBody, {
      headers: {
         'Content-Type': 'text/plain'
      }
   })
   .then(response => response.data.user)
   .catch(error => {
      const serverError = error?.response?.data?.error || 'Ошибка регистрации';
      return Promise.reject(serverError); 
   });
}

export async function fetchUsers() {
   return axios.get(API_URL)
      .then(response => response.data.users)
      .catch(error => {
         const serverError = error?.response?.data?.error || 'Не удалось загрузить список пользователей';
         return Promise.reject(String(serverError));
      });
}

const authService = { signIn, signUp, fetchUsers };
export default authService;
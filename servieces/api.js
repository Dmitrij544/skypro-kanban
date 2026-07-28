import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function fetchTasks({ token }) {
   return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка загрузки'));
}

export async function postTask({ token, taskData }) {
   return axios.post(API_URL, taskData, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks);
}

export async function editTask({ token, id, taskData }) {
   return axios.put(`${API_URL}/${id}`, taskData, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка обновления'));
}

export async function deleteTask({ token, id }) {
   return axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка удаления'));
}
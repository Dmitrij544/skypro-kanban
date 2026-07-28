import { createContext, useState, useContext } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import { fetchTasks, editTask, deleteTask } from '../servieces/api'; 
const TasksContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, setTasksState] = useState([]);
  const { user } = useContext(AuthContext) || {};

  const loadTasks = async () => {
    if (!user?.token) {
      setTasksState([]);
      return;
    }
    try {
      const serverTasks = await fetchTasks({ token: user.token });
      setTasksState(serverTasks || []);
    } catch (error) {
      console.error("Ошибка загрузки задач:", error);
    }
  };

  const addTask = async (taskData) => {
    if (!user?.token) return;

    try {
      const rawDate = taskData?.date ? new Date(taskData.date) : new Date();
      const year = rawDate.getFullYear();
      const month = String(rawDate.getMonth() + 1).padStart(2, '0');
      const day = String(rawDate.getDate()).padStart(2, '0');
      const cleanPrimitiveDate = `${year}-${month}-${day}`;

      const cleanedTaskObject = {
        title: (taskData?.title || "Новая задача").trim(),
        topic: (taskData?.topic || "Web Design").trim(), 
        status: "Без статуса",
        description: (taskData?.description || "").trim(),
        date: cleanPrimitiveDate
      };

      const jsonBody = JSON.stringify(cleanedTaskObject);
      const response = await axios.post("https://wedev-api.sky.pro/api/kanban", jsonBody, {
        headers: { 
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "text/plain" 
        }
      });
      
      setTasksState(response.data.tasks || []);
    } catch (err) {
      console.error("=== ОШИБКА БЭКЕНДА ===");
      alert(`Ошибка создания задачи: ${err?.response?.data?.error || err.message}`);
    }
  };

  const editTaskInList = async (id, updatedTaskData) => {
    if (!user?.token) return;

    try {
      const jsonBody = JSON.stringify(updatedTaskData);

      console.log("=== ОТПРАВЛЯЕМ ОБНОВЛЕННЫЙ JSON ЗАДАЧИ ===", jsonBody);

      const response = await axios.put(`https://wedev-api.sky.pro/api/kanban/${id}`, jsonBody, {
        headers: { 
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "text/plain" 
        }
      });
      
      setTasksState(response.data.tasks || []);
    } catch (err) {
      console.error("=== ОШИБКА РЕДАКТИРОВАНИЯ БЭКЕНДА ===");
      alert(`Ошибка изменения задачи: ${err?.response?.data?.error || err.message}`);
    }
  };

  const toggleTask = async (id) => {
    if (!user?.token) return;
    const currentTask = tasks.find(t => (t._id || t.id) === id);
    if (!currentTask) return;

    try {
      const nextStatus = currentTask.status === 'Готово' ? 'Без статуса' : 'Готово';
      const updatedTasks = await editTask({ 
        token: user.token, 
        id, 
        taskData: { ...currentTask, status: nextStatus } 
      });
      setTasksState(updatedTasks || []);
    } catch (err) {
      alert(`Ошибка обновления: ${err}`);
    }
  };

  const deleteTaskFromList = async (id) => {
    if (!user?.token) return;
    try {
      const updatedTasks = await deleteTask({ token: user.token, id });
      setTasksState(updatedTasks || []);
    } catch (err) {
      alert(`Ошибка удаления: ${err}`);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks: loadTasks, addTask, editTask: editTaskInList, toggleTask, deleteTask: deleteTaskFromList }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
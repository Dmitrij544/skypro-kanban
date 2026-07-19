import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const TasksContext = createContext(null);
const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext) || {};

  const fetchTasksData = async () => {
    if (!user || !user.token) {
      setTasks([]);
      return;
    }

    if (user.token === 'fake-test-token') {
      setTasks([
        { 
          _id: 'test-1', 
          title: 'Тестовая задача Анны', 
          topic: 'Web Design', 
          status: 'Без статуса', 
          description: 'Локальный режим контекста работает идеально!', 
          date: new Date().toISOString() 
        }
      ]);
      return;
    }

    try {
      const res = await axios.get(KANBAN_API_URL, { 
        headers: { Authorization: `Bearer ${user.token}` } 
      });
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.error("Ошибка загрузки задач:", err);
    }
  };

  const addTask = async (taskData) => {
    if (!user?.token) return;

    if (user.token === 'fake-test-token') {
      const newTask = {
        _id: `local-${Date.now()}`,
        ...taskData,
        status: 'Без статуса',
        date: new Date().toISOString()
      };
      setTasks(prev => [...prev, newTask]);
      return;
    }

    try {
      const res = await axios.post(KANBAN_API_URL, taskData, {
        headers: { Authorization: `Bearer ${user.token}`, "Content-Type": "application/json" }
      });
      setTasks(res.data.tasks || []);
    } catch (err) {
      alert(`Ошибка создания: ${err.message}`);
    }
  };

  const toggleTask = async (id) => {
    if (!user?.token) return;

    if (user.token === 'fake-test-token') {
      setTasks(prev => prev.map(t => 
        (t._id || t.id) === id 
          ? { ...t, status: t.status === 'Готово' ? 'Без статуса' : 'Готово' } 
          : t
      ));
      return;
    }

    const task = tasks.find(t => (t._id || t.id) === id);
    if (!task) return;
    try {
      const nextStatus = task.status === 'Готово' ? 'Без статуса' : 'Готово';
      const res = await axios.put(`${KANBAN_API_URL}/${id}`, { status: nextStatus }, {
        headers: { Authorization: `Bearer ${user.token}`, "Content-Type": "application/json" }
      });
      setTasks(res.data.tasks || []);
    } catch (err) {
      alert(`Ошибка обновления: ${err.message}`);
    }
  };

  const deleteTask = async (id) => {
    if (!user?.token) return;

    if (user.token === 'fake-test-token') {
      setTasks(prev => prev.filter(t => (t._id || t.id) !== id));
      return;
    }

    try {
      const res = await axios.delete(`${KANBAN_API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setTasks(res.data.tasks || []);
    } catch (err) {
      alert(`Ошибка удаления: ${err.message}`);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, fetchTasks: fetchTasksData, addTask, toggleTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
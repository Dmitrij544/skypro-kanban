import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AppRoutes from "./AppRoutes";
import "./App.css";

const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

async function fetchTasks({ token }) {
   return axios.get(KANBAN_API_URL, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка загрузки'));
}

async function postTask({ token, taskData }) {
   return axios.post(KANBAN_API_URL, taskData, {
      headers: { 
         Authorization: `Bearer ${token}`,
         "Content-Type": null 
      }
   })
   .then(response => response.data.tasks)
   .catch(error => {
      const serverError = error?.response?.data?.error || error?.message || 'Ошибка создания';
      return Promise.reject(String(serverError));
   });
}

async function editTask({ token, id, taskData }) {
   return axios.put(`${KANBAN_API_URL}/${id}`, taskData, {
      headers: { 
         Authorization: `Bearer ${token}`,
         "Content-Type": null 
      }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка обновления'));
}

async function deleteTask({ token, id }) {
   return axios.delete(`${KANBAN_API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => response.data.tasks)
   .catch(error => Promise.reject(error?.response?.data?.error || error?.message || 'Ошибка удаления'));
}

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const getUserToken = useCallback(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      try {
        const parsed = JSON.parse(userInfo);
        return parsed.token || null;
      } catch {
        return null;
      }
    }
    return null;
  }, []);

  useEffect(() => {
    const token = getUserToken();
    
    if (!isAuth || !token) {
      const timer = setTimeout(() => {
        setCards([]);
        setIsLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIsLoading(true);
      
      fetchTasks({ token })
        .then((serverTasks) => {
          setCards(serverTasks || []);
        })
        .catch((err) => {
          console.error("Ошибка загрузки задач:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 0);

    return () => clearTimeout(timer);
  }, [isAuth, getUserToken]); 
  useEffect(() => {
    const token = getUserToken();
    if (!isAuth || !token) {
      const timer = setTimeout(() => {
        setCards([]);
        setIsLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIsLoading(true);
      
      fetchTasks({ token })
        .then((serverTasks) => {
          setCards(serverTasks || []);
        })
        .catch((err) => {
          console.error("Ошибка загрузки задач:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 0);

    return () => clearTimeout(timer);
  }, [isAuth, getUserToken]);

  const handleAddTask = async (newCard) => {
    const token = getUserToken();
    if (!token) return;
    try {
      const updatedTasks = await postTask({ token, taskData: newCard });
      setCards(updatedTasks);
    } catch (err) {
      alert(`Ошибка добавления: ${err}`);
    }
  };

  const handleSaveTask = async (updatedTask) => {
    const token = getUserToken();
    if (!token) return;
    try {
      const updatedTasks = await editTask({ 
        token, 
        id: updatedTask._id || updatedTask.id, 
        taskData: updatedTask 
      });
      setCards(updatedTasks);
    } catch (err) {
      alert(`Ошибка сохранения: ${err}`);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const token = getUserToken();
    if (!token) return;
    try {
      const updatedTasks = await deleteTask({ token, id: taskId });
      setCards(updatedTasks);
    } catch (err) {
      alert(`Ошибка удаления: ${err}`);
    }
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <p className="loader-text">Данные загружаются...</p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <AppRoutes 
        cards={cards} 
        isAuth={isAuth} 
        setAuth={setIsAuth} 
        onAddTask={handleAddTask}
        onSaveTask={handleSaveTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
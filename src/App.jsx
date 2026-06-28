import { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes'; 
import { initialTasks } from './data'; 
import './App.css'; 

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(initialTasks); 
      setIsLoading(false);    
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  const handleAddTask = (newCard) => {
    setCards(prev => [...prev, newCard]);
  };

  const handleSaveTask = (updatedTask) => {
    setCards(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleDeleteTask = (taskId) => {
    setCards(prev => prev.filter(task => task.id !== taskId));
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
import { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext"; 
import ThemeContext from "./ThemeContext"; 
import TasksContext from "./TasksContext"; 
import AppRoutes from "./AppRoutes"; 
import "./App.css"; 

function App() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  const { user } = useContext(AuthContext) || {};
  const isAuth = !!user;

  const { fetchTasks } = useContext(TasksContext) || {};

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTasksData = async () => {
      if (isAuth && typeof fetchTasks === 'function') {
        setIsLoading(true); 
        try {
          await fetchTasks(); 
        } catch (err) {
          console.error("Ошибка при инициализации приложения:", err);
        }
        setIsLoading(false); 
      } else {
        setIsLoading(false); 
      }
    };

    getTasksData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className={`wrapper ${(theme === 'dark' && isAuth) ? '_dark' : 'light'}`}>
      <AppRoutes isAuth={isAuth} />

      {isLoading && isAuth && (
        <div className="glass-loader">
          <div className="neon-spinner"></div>
          <p className="glass-loader-text">Синхронизация доски...</p>
        </div>
      )}
    </div>
  );
}

export default App;
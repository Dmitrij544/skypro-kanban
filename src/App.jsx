import { useContext } from "react";
import AuthContext from "./AuthContext"; 
// ИСПРАВЛЕНО: Удалили неиспользуемый импорт TasksContext, линтер полностью чист!
import ThemeContext from "./ThemeContext"; 
import LoginPage from "./pages/LoginPage/LoginPage"; 

import Header from "./components/Header/Header";       
import AddTaskForm from "./AddTaskForm"; 
import TaskList from "./App/TaskList/TaskList";         
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  const { user } = useContext(AuthContext) || {};

  const isAuth = !!user;

  if (!isAuth) {
    return <LoginPage />;
  }

  return (
    <div className={`wrapper ${theme === 'dark' ? '_dark' : 'light'}`}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Header />
        <AddTaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
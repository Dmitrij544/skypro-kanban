import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import CardPage from './pages/CardPage/CardPage'; 
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExitPage from './pages/ExitPage/ExitPage';
import TaskNewPage from './pages/TaskNewPage/TaskNewPage';
import NotFoundPage from './pages/NotFound/NotFound';

import PopBrowse from './components/PopBrowse/PopBrowse';
import PopEdit from './components/PopBrowse/PopEdit';

function AppRoutes({ cards, isAuth, setAuth, onSaveTask, onDeleteTask, onAddTask }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
      <Route path="/register" element={<RegisterPage setAuth={setAuth} />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        
        <Route path="/" element={<CardPage cards={cards} setAuth={setAuth} />}>
          <Route path="exit" element={<ExitPage setAuth={setAuth} />} />
          <Route path="new-card" element={<TaskNewPage onAddTask={onAddTask} />} />
          
          <Route 
            path="task/:id" 
            element={<PopBrowse cards={cards} />} 
          />
          <Route 
            path="task/:id/edit" 
            element={<PopEdit cards={cards} onSave={onSaveTask} onDelete={onDeleteTask} />} 
          />
        </Route>

      </Route>
    </Routes>
  );
}

export default AppRoutes;
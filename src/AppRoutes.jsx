import { Routes, Route, Navigate } from 'react-router-dom';

import CardPage from './pages/CardPage/CardPage'; 
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExitPage from './pages/ExitPage/ExitPage';
import TaskNewPage from './pages/TaskNewPage/TaskNewPage';
import NotFoundPage from './pages/NotFound/NotFound';

import PopBrowse from './components/PopBrowse/PopBrowse';
import PopEdit from './components/PopBrowse/PopEdit';

function RequireAuth({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

function AppRoutes({ isAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route 
        path="/" 
        element={
          <RequireAuth isAuth={isAuth}>
            <CardPage />
          </RequireAuth>
        } 
      />
      <Route 
        path="/exit" 
        element={
          <RequireAuth isAuth={isAuth}>
            <ExitPage />
          </RequireAuth>
        } 
      />
      <Route 
        path="/new-card" 
        element={
          <RequireAuth isAuth={isAuth}>
            <TaskNewPage />
          </RequireAuth>
        } 
      />
      
      <Route 
        path="/task/:id" 
        element={
          <RequireAuth isAuth={isAuth}>
            <PopBrowse />
          </RequireAuth>
        } 
      />
      <Route 
        path="/task/:id/edit" 
        element={
          <RequireAuth isAuth={isAuth}>
            <PopEdit />
          </RequireAuth>
        } 
      />

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
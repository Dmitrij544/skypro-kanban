import { useContext } from 'react'; // ДОБАВИЛИ: useContext
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage'; 
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExitPage from './pages/ExitPage/ExitPage';
import PopNewCard from './components/PopNewCard/PopNewCard'; 
import NotFoundPage from './pages/NotFound/NotFound';
import PopBrowse from './components/PopBrowse/PopBrowse'; 
import ThemeContext from './ThemeContext'; 
import PopEdit from './components/PopBrowse/PopEdit';

function RequireAuth({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

function AppRoutes({ isAuth }) {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext) || { theme: 'light' };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage theme={theme} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<RequireAuth isAuth={isAuth}><CardPage /></RequireAuth>} />
      <Route path="/exit" element={<RequireAuth isAuth={isAuth}><ExitPage /></RequireAuth>} />
      
      <Route 
        path="/new-card" 
        element={
          <RequireAuth isAuth={isAuth}>
            <PopNewCard onClose={() => navigate('/')} />
          </RequireAuth>
        } 
      />
      
      <Route path="/task/:id" element={<RequireAuth isAuth={isAuth}><PopBrowse /></RequireAuth>} />
      
      <Route path="/task/:id/edit" element={<RequireAuth isAuth={isAuth}><PopEdit /></RequireAuth>} />
      
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
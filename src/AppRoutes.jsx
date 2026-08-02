import { useContext } from 'react'; 
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage'; 
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExitPage from './pages/ExitPage/ExitPage';
import PopNewCard from './components/PopNewCard/PopNewCard'; 
import NotFoundPage from './pages/NotFound/NotFound';
import PopBrowse from './components/PopBrowse/PopBrowse'; 
import PopEdit from './components/PopBrowse/PopEdit';
import ThemeContext from './ThemeContext'; 

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
      
      <Route path="/" element={<RequireAuth isAuth={isAuth}><CardPage /></RequireAuth>}>
        <Route path="exit" element={<ExitPage />} />
        <Route path="new-card" element={<PopNewCard onClose={() => navigate('/')} />} />
        <Route path="task/:id" element={<PopBrowse />} />
        <Route path="task/:id/edit" element={<PopEdit />} />
      </Route>
      
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
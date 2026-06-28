import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const hasToken = !!localStorage.getItem("userInfo");

  return hasToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
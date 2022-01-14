import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: any) {
  const isLoggedIn = !!localStorage.getItem('token')
  return isLoggedIn ? children : <Navigate to="/login" />;
}

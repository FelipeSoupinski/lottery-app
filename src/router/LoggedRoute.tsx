import { Navigate } from "react-router-dom";

export function LoggedRoute({ children }: any) {
  const isLoggedIn = !!localStorage.getItem('token')
  return isLoggedIn ? <Navigate to="/home" /> : children;
}

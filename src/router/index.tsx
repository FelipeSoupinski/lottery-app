import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgetPassword from '../components/Login/ForgetPassword';
import NewBet from "../components/NewBet";
import Signup from '../components/Login/Signup';
import Login from '../components/Login/Login';
import Lottery from "../components/Lottery";
import { PrivateRoute } from "./PrivateRoute";
import { LoggedRoute } from "./LoggedRoute";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={
        <LoggedRoute>
          <Login />
        </LoggedRoute>
      } />
      <Route path="/home" element={
        <PrivateRoute>
          <Lottery />
        </PrivateRoute>
      } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/new-bet" element={
        <PrivateRoute>
          <NewBet />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </BrowserRouter>
}

export { Router }
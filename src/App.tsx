import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from './components/Login/ForgetPassword';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Lottery from "./components/Lottery";

function App() {
  const token = localStorage.getItem('token')

  return (
    <Router>
      <div className="App">
        <Routes>
          {token && <Route path="/" element={<Lottery />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

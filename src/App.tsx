import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from './components/Login/ForgetPassword';
import NewBet from "./components/Lottery/NewBet";
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Lottery from "./components/Lottery";
import { GamesContextProvider } from "./utils/GamesContext";
import { CartContextProvider } from "./utils/CartContext";

function App() {
  return (
    <GamesContextProvider>
      <CartContextProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Lottery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/new-bet" element={<NewBet />} />
            </Routes>
          </div>
        </Router>
      </CartContextProvider>
    </GamesContextProvider>
  );
}

export default App;

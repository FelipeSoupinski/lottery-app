import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from './components/Login/ForgetPassword';
import NewBet from "./components/Lottery/NewBet";
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Lottery from "./components/Lottery";
import { useMemo } from "react";

function App() {
  const token = localStorage.getItem('token')

  const DUMMY_BETS = useMemo(() => {
    return [
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 2.5,
        name: 'Lotofácil',
        color: '#7f3992',
        qtde: 20,
        max_number: 6
      },
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 3.5,
        name: 'Megasena',
        color: '#01ac65',
        qtde: 22,
        max_number: 7
      },
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 4.5,
        name: 'Lotomania',
        color: '#f79c31',
        qtde: 50,
        max_number: 20
      },
    ]
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          {token && <Route path="/" element={<Lottery bets={DUMMY_BETS} />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/new-bet" element={<NewBet bets={DUMMY_BETS} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

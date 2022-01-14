import './app.css'
import GlobalContext from './utils/Context/GlobalContext';
import { Router } from './router';

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <Router />
      </div>
    </GlobalContext>
  );
}

export default App;

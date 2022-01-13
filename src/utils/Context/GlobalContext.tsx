import { GamesContextProvider } from "./GamesContext";
import { CartContextProvider } from "./CartContext";
import { NewBetContextProvider } from './NewBetContext';
import { GamesFilterContextProvider } from "./GamesFilterContext";

const GlobalContext: React.FC = ({ children }) => {
  return (
  <GamesContextProvider>
    <CartContextProvider>
      <NewBetContextProvider>
        <GamesFilterContextProvider>
          {children}
        </GamesFilterContextProvider>
      </NewBetContextProvider>
    </CartContextProvider>
  </GamesContextProvider>)
}

export default GlobalContext;
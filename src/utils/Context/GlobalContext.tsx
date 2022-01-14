import { GamesContextProvider } from "./GamesContext";
import { CartContextProvider } from "./CartContext";
import { NewBetContextProvider } from './NewBetContext';
import { BetsFilterContextProvider } from "./BetsFilterContext";
import { BetsContextProvider } from "./BetsContext";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <GamesContextProvider>
      <BetsContextProvider>
        <CartContextProvider>
          <NewBetContextProvider>
            <BetsFilterContextProvider>
              {children}
            </BetsFilterContextProvider>
          </NewBetContextProvider>
        </CartContextProvider>
      </BetsContextProvider>
    </GamesContextProvider>)
}

export default GlobalContext;
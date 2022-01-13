import React, { createContext, useState } from "react";
import BetState from "./BetState";
import Bet from './Bet';

type propsCartContext = {
  state: BetState
  setState: React.Dispatch<React.SetStateAction<BetState>>
}

const DEFAULT_VALUE = {
  state: {
    bets: [] as Bet[],
    total: 0
  },
  setState: () => {}
}

const CartContext = createContext<propsCartContext>(DEFAULT_VALUE)

const CartContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <CartContext.Provider
      value={{ state, setState }} >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider }
export default CartContext

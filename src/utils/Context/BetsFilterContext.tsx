import React, { createContext, useState } from "react";
import Bet from "../Bet";

type BetsFilter = {
  bets: Bet[],
  gameActive: string
}

type propsBetsFilterContext = {
  state: { 
    bets: Bet[],
    gameActive: string
  },
  setState: React.Dispatch<React.SetStateAction<BetsFilter>>
}

const DEFAULT_VALUE = {
  state: { 
    bets: [] as Bet[],
    gameActive: ''
  },
  setState: () => {}
}

const BetsFilterContext = createContext<propsBetsFilterContext>(DEFAULT_VALUE)

const BetsFilterContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <BetsFilterContext.Provider
      value={{
        state,
        setState
      }} >
      {children}
    </BetsFilterContext.Provider>
  );
}

export { BetsFilterContextProvider }
export default BetsFilterContext

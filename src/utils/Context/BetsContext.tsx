import React, { createContext, useState } from "react";
import Bet from "../Bet";

type propsBetsContext = {
  state: Bet[]
  setState: React.Dispatch<React.SetStateAction<Bet[]>>
}

const DEFAULT_VALUE = {
  state: [] as Bet[],
  setState: () => { }
}

const BetsContext = createContext<propsBetsContext>(DEFAULT_VALUE)

const BetsContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <BetsContext.Provider
      value={{
        state,
        setState
      }} >
      {children}
    </BetsContext.Provider>
  );
}

export { BetsContextProvider }
export default BetsContext

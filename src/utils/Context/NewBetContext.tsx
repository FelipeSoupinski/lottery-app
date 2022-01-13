import React, { createContext, useState } from "react";
import Game from "../Game";

type NewBetState = {
  gameSelected: Game,
  numbersSelected: boolean[],
  countNumbersSelected: number
}

type propsNewBetContext = {
  state: NewBetState
  setState: React.Dispatch<React.SetStateAction<NewBetState>>
}

const DEFAULT_VALUE = {
  state: {
    gameSelected: new Game('', '', 0, '', '', 0, 0),
    numbersSelected: [] as boolean[],
    countNumbersSelected: 0
  },
  setState: () => {}
}

const NewBetContext = createContext<propsNewBetContext>(DEFAULT_VALUE)

const NewBetContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <NewBetContext.Provider
      value={{ state, setState }} >
      {children}
    </NewBetContext.Provider>
  );
}

export { NewBetContextProvider }
export default NewBetContext

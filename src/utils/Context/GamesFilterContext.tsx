import React, { createContext, useState } from "react";
import Game from "../Game";

type GamesFilter = {
  games: Game[],
  gameActive: string
}

type propsGamesFilterContext = {
  state: { 
    games: Game[],
    gameActive: string
  },
  setState: React.Dispatch<React.SetStateAction<GamesFilter>>
}

const DEFAULT_VALUE = {
  state: { 
    games: [] as Game[],
    gameActive: ''
  },
  setState: () => {}
}

const GamesFilterContext = createContext<propsGamesFilterContext>(DEFAULT_VALUE)

const GamesFilterContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <GamesFilterContext.Provider
      value={{
        state,
        setState
      }} >
      {children}
    </GamesFilterContext.Provider>
  );
}

export { GamesFilterContextProvider }
export default GamesFilterContext

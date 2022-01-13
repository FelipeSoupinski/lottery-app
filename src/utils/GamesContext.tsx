import React, { createContext, useState } from "react";
import Game from "./Game";

type propsGamesContext = {
  state: Game[]
  setState: React.Dispatch<React.SetStateAction<Game[]>>
}

const DEFAULT_VALUE = {
  state: [
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
  ],
  setState: () => { }
}

const GamesContext = createContext<propsGamesContext>(DEFAULT_VALUE)

const GamesContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <GamesContext.Provider
      value={{
        state,
        setState
      }} >
      {children}
    </GamesContext.Provider>
  );
}

export { GamesContextProvider }
export default GamesContext

import React, { createContext, useState } from "react";
import Game from "../Game";

type propsGamesContext = {
  state: Game[]
  setState: React.Dispatch<React.SetStateAction<Game[]>>
}

const DEFAULT_VALUE = {
  state: [
    {
      date: '30/11/2020',
      price: 2.5,
      name: 'Lotofácil',
      color: '#7f3992',
      qtde: 20,
      max_number: 6
    },
    {
      date: '30/11/2020',
      price: 3.5,
      name: 'Megasena',
      color: '#01ac65',
      qtde: 22,
      max_number: 7
    },
    {
      date: '30/11/2020',
      price: 4.5,
      name: 'Lotomania',
      color: '#f79c31',
      qtde: 50,
      max_number: 20
    },
    {
      date: '30/11/2021',
      price: 3.75,
      name: 'Lotoinski',
      color: '#3e7f2a',
      qtde: 35,
      max_number: 14
    }
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

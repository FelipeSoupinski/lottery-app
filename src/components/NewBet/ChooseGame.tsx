import { useContext } from "react"
import GamesContext from "../../utils/Context/GamesContext"
import NewBetContext from "../../utils/Context/NewBetContext"

const ChooseGame: React.FC<{}> = () => {
  const { state: newBetState, setState: setNewBetState } = useContext(NewBetContext)
  const { state: betsState } = useContext(GamesContext)

  const selectGameHandler = (name: string) => {
    const newGameSelected = betsState.filter((bet) => bet.name === name)[0]
    setNewBetState({
      gameSelected: newGameSelected,
      numbersSelected: new Array(newBetState.gameSelected.qtde).fill(false),
      countNumbersSelected: 0
    })
  }

  return <div className="row mt-1">
    <p>Choose a game</p>
    {betsState.map((bet, index) => {
      return <div className="col-2 m-1 p-1 text-center" style={
        {
          color: bet.color,
          border: `2px solid ${bet.color}`,
          borderRadius: '50%',
          cursor: 'pointer'
        }
      } key={index} onClick={selectGameHandler.bind(null, bet.name)}>
        {bet.name}
      </div>
    })}
  </div>
}

export default ChooseGame;
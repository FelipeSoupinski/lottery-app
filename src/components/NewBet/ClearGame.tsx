import { useContext } from "react"
import NewBetContext from "../../utils/Context/NewBetContext"

const ClearGame: React.FC<{}> = () => {
  const { state: newBetState, setState: setNewBetState } = useContext(NewBetContext)

  const clearGameHandler = () => {
    setNewBetState(Object.assign({}, {...newBetState}, {
      numbersSelected: new Array(newBetState.gameSelected.qtde).fill(false),
      countNumbersSelected: 0
    }))
  }

  return <div className="col">
    <button className="btn btn-outline-success" onClick={clearGameHandler}>
      Clear Game
    </button>
  </div>
}

export default ClearGame;
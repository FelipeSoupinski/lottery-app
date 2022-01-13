import { useContext } from "react"
import NewBetContext from "../../utils/Context/NewBetContext"

const CompleteGame: React.FC<{}> = () => {
  const { state: newBetState, setState: setNewBetState } = useContext(NewBetContext)

  const completeGameHandler = () => {
    let randomNumbers: number[] = []
    for (let i = 0; i < newBetState.gameSelected.max_number; i++) {
      let randomNumber
      do {
        randomNumber = Math.ceil(Math.random() * newBetState.gameSelected.qtde)
      } while (randomNumbers.includes(randomNumber))
      randomNumbers.push(randomNumber)
    }
    let randomNumberSelected = new Array(newBetState.gameSelected.qtde).fill(false)
    setNewBetState(Object.assign({}, {...newBetState}, {
      numbersSelected: randomNumberSelected.map((value, index) => {
        return randomNumbers.includes(index + 1)
      }),
      countNumbersSelected: newBetState.gameSelected.max_number
    }))
  }

  return <div className="col">
    <button className="btn btn-outline-success" onClick={completeGameHandler}>
      Complete Game
    </button>
  </div>
}

export default CompleteGame;
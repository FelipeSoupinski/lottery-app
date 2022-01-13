import { useContext } from "react"
import NewBetContext from "../../utils/Context/NewBetContext"

const Options: React.FC<{}> = () => {
  const { state: newBetState, setState: setNewBetState } = useContext(NewBetContext)

  const addNumberSelectedHandler = (option: number) => {
    if (newBetState.numbersSelected[option]) {
      setNewBetState(Object.assign({}, {...newBetState}, {
        numbersSelected: newBetState.numbersSelected.map((value, index) => {
          return index === option ? !value : value
        }),
        countNumbersSelected: newBetState.countNumbersSelected - 1
      }))
    } else if (!newBetState.numbersSelected[option] && newBetState.countNumbersSelected < newBetState.gameSelected.max_number) {
      setNewBetState(Object.assign({}, {...newBetState}, {
        numbersSelected: newBetState.numbersSelected.map((value, index) => {
          return index === option ? !value : value
        }),
        countNumbersSelected: newBetState.countNumbersSelected + 1
      }))
    }
  }

  const formatOption = (option: number) => {
    option++
    return option.toString().length === 1 ? '0' + option : option.toString()
  }

  return <div className="row">
    {Array(newBetState.gameSelected.qtde).fill(0).map((value, index) => {
      return <div className="col-1 mt-1"
        onClick={addNumberSelectedHandler.bind(this, index)}
        key={'option ' + index}>
        <div className={`option ${newBetState.numbersSelected[index] ? 'option-selected' : ''}`}>
          {formatOption(index)}
        </div>
      </div>
    })}
  </div>
}

export default Options;
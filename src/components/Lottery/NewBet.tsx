import { useState } from "react";
import Bet from "../../utils/Bet";
import Navbar from "./Navbar";

const NewBet: React.FC<{ bets: Bet[] }> = (props) => {
  const [gameSelected, setGameSelected] = useState<Bet>(new Bet('', '', 0, '', '', 0, 0))
  const [numbersSelected, setNumbersSelected] = useState<boolean[]>(new Array(gameSelected.qtde).fill(false))
  const [countNumbersSelected, setCountNumbersSelected] = useState<number>(0)

  const selectGameHandler = (name: string) => {
    setGameSelected(props.bets.filter((bet) => bet.name === name)[0])
    setNumbersSelected(new Array(gameSelected.qtde).fill(false))
    setCountNumbersSelected(0)
  }

  const formatOption = (option: number) => {
    option++
    return option.toString().length === 1 ? '0' + option : option.toString()
  }

  const addNumberSelectedHandler = (option: number) => {
    if (numbersSelected[option]) {
      setNumbersSelected(numbersSelected.map((value, index) => {
        return index === option ? !value : value
      }))
      setCountNumbersSelected(countNumbersSelected-1)
    } else if (!numbersSelected[option] && countNumbersSelected < gameSelected.max_number) {
      setNumbersSelected(numbersSelected.map((value, index) => {
        return index === option ? !value : value
      }))
      setCountNumbersSelected(countNumbersSelected+1)
    }
  }

  const completeGameHandler = () => {
    let randomNumbers: number[] = []
    for (let i = 0; i < gameSelected.max_number; i++) {
      let randomNumber
      do {
        randomNumber = Math.ceil(Math.random() * gameSelected.qtde)
      } while (randomNumbers.includes(randomNumber))
      randomNumbers.push(randomNumber)
    }
    let randomNumberSelected = new Array(gameSelected.qtde).fill(false)
    setNumbersSelected(randomNumberSelected.map((value, index) => {
      return randomNumbers.includes(index+1)
    }))
    setCountNumbersSelected(gameSelected.max_number)
  }

  const clearGameHandler = () => {
    setNumbersSelected(new Array(gameSelected.qtde).fill(false))
    setCountNumbersSelected(0)
  }

  const addToCartHandler = () => {
    if (countNumbersSelected < gameSelected.max_number) {
      window.alert(`You need to select ${gameSelected.max_number} numbers`)
    } 
    
  }
  
  return <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row mt-3">
            <p style={{ fontStyle: 'italic' }}>
              <span className="gray-sm">NEW BET</span> FOR {gameSelected.name.toUpperCase()}
            </p>
          </div>
          <div className="row mt-1">
            <p>Choose a game</p>
            {props.bets.map((bet, index) => {
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
          <div className="row mt-2">
            <p className="gray-sm">Fill your bet</p>
            <p style={{ color: 'gray' }}>Mark as many numbers as you want up to a maximum of 50.
              Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</p>
          </div>
          <div className="row">
            {Array(gameSelected.qtde).fill(0).map((value, index) => {
              return <div className={'col-1 mt-1'}
                onClick={addNumberSelectedHandler.bind(this, index)}
                key={'option ' + index}>
                <div className={`option ${numbersSelected[index] ? 'option-selected' : ''}`}>
                  {formatOption(index)}
                </div>
              </div>
            })}
          </div>
          <div className="row mt-4">
            <div className="col">
              <button className="btn btn-outline-success" onClick={completeGameHandler}>
                Complete Game
              </button>
            </div>
            <div className="col">
              <button className="btn btn-outline-success" onClick={clearGameHandler}>
                Clear Game
              </button>
            </div>
            <div className="col">
            <button className="btn btn-success" onClick={addToCartHandler}>
              Add to cart
            </button>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  </div>
}

export default NewBet;
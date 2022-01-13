import { useContext } from "react"
import Bet from "../../utils/Bet"
import BetState from "../../utils/BetState"
import CartContext from "../../utils/Context/CartContext"
import NewBetContext from "../../utils/Context/NewBetContext"

const AddToCart: React.FC<{}> = () => {
  const { state: newBetState, setState: setNewBetState } = useContext(NewBetContext)

  const { state: cartState, setState: setCartState } = useContext(CartContext)

  const addToCartHandler = () => {
    if (newBetState.gameSelected.max_number === 0) {
      window.alert(`You need to select ${newBetState.gameSelected.max_number} numbers`)
    } else if (newBetState.countNumbersSelected < newBetState.gameSelected.max_number) {
      window.alert(`You need to select ${newBetState.gameSelected.max_number} numbers`)
    } else {
      const newBet: Bet = new Bet(
        getNumbersSelected(),
        newBetState.gameSelected.date,
        newBetState.gameSelected.price,
        newBetState.gameSelected.name,
        newBetState.gameSelected.color
      )
      const newCartState: BetState = {
        bets: [...cartState.bets, newBet],
        total: cartState.total + newBetState.gameSelected.price
      }
      setCartState(newCartState)
      clearGame()
    }
  }

  const getNumbersSelected = () => {
    let numbers = [] as number[]
    newBetState.numbersSelected.forEach((value, index) => {
      if (value) {
        numbers.push(index + 1)
      }
    })
    return numbers
  }

  const clearGame = () => {
    setNewBetState(Object.assign({}, {...newBetState}, {
      numbersSelected: new Array(newBetState.gameSelected.qtde).fill(false),
      countNumbersSelected: 0
    }))
  }

  return <div className="col">
    <button className="btn btn-success" onClick={addToCartHandler}>
      Add to cart
    </button>
  </div>
}

export default AddToCart;
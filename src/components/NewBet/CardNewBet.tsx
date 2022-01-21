import React, { useContext } from "react"
import { Link } from "react-router-dom"
import BetsContext from "../../utils/Context/BetsContext"
import CartContext from "../../utils/Context/CartContext"
import CartItem from "./CartItem"

const CardNewBet: React.FC<{}> = (props) => {
  const { state: cartState, setState: setCartState } = useContext(CartContext)
  const { state: betsState, setState: setBetsState } = useContext(BetsContext)

  const onSaveHandler = () => {
    setBetsState([...betsState, ...cartState.bets])
    setCartState({ bets: [], total: 0 })
  }

  return <div className="card mt-5">
    <div className="card-header  text-center">
      <span className="gray-sm">CART</span>
    </div>
    <div className="card-body" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
      <div className="p-3">
        {cartState.bets.map((game, index) => {
          return <CartItem
            key={index}
            id={index}
            numbers={game.numbers}
            price={game.price}
            name={game.name}
            color={game.color} />
        })}
      </div>
      <p className="gray-sm">CART TOTAL: R$ {cartState.total}</p>
    </div>
    <div className="card-footer text-center">
      <Link to="/">
        <button id="save" className="btn btn-outline-success" onClick={onSaveHandler}>
          Save
        </button>
      </Link>
    </div>
  </div>
}

export default CardNewBet;
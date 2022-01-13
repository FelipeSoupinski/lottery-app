import React, { useContext, useState } from "react"
import CartContext from "../../utils/CartContext"
import CartItem from "./CartItem"
import Bet from "../../utils/Bet"

const CardNewBet: React.FC<{}> = (props) => {
  const { state: cartState, setState: setCartState } = useContext(CartContext)

  return <div className="card mt-5">
    <div className="card-header  text-center">
      <span className="gray-sm">CART</span>
    </div>
    <div className="card-body" style={{ maxHeight: '65vh', overflowY: 'auto' }}>

      <div className="p-3">
        {cartState.bets.map((game, index) => {
          return <CartItem
            key={index}
            numbers={game.numbers}
            price={game.price}
            name={game.name}
            color={game.color} />
        })}
      </div>

      <p className="gray-sm">CART TOTAL: R$ {cartState.total}</p>
    </div>
    <div className="card-footer text-center">
      <button className="btn btn-outline-success">
        Save
      </button>
    </div>
  </div>
}

export default CardNewBet;
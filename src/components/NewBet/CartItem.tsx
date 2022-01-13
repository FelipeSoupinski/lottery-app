import { useContext } from "react";
import CartContext from "../../utils/Context/CartContext"

const CartItem: React.FC<{
  id: number,
  numbers: number[],
  price: number,
  name: string,
  color: string,
}> = (props) => {
  const { state: cartState, setState: setCartState } = useContext(CartContext)

  const onDeleteToCartHandler = () => {
    let newTotal = cartState.total
    const newBets = cartState.bets.filter((bet, index) => {
      if (index === props.id) {
        newTotal -= bet.price
        return false
      }
      return true
    })
    setCartState({ bets: newBets, total: newTotal })
  }

  return <div className="row">
    <div className="col-2">
      <div className="svg-container" onClick={onDeleteToCartHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash svg-trash mt-2" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </div>
    </div>
    <div className="col-10 mt-3 p-2" style={
      {
        borderLeft: `2px solid ${props.color}`
      }
    }>
      <div className="row"><p>{props.numbers.toString()}</p></div>
      <div className="row text-start">
        <p>
          <span style={{ color: props.color, paddingRight: '10px' }}>{props.name}</span>
          (R${props.price})
        </p>
      </div>
    </div>
  </div>
};

export default CartItem;
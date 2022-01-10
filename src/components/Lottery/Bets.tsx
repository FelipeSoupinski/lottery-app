import { useEffect, useState } from "react";
import Bet from "../../utils/Bet";
import BetItem from './BetItem';

const Bets: React.FC<{bets: Bet[]}> = (props) => {
  const [bets, setBets] = useState<Bet[]>([])
  
  useEffect(() => {
    setBets(props.bets)
  }, [props.bets])

  return <div>
    {bets.map((bet, index) => {
      return <BetItem 
      key={index}
      numbers={bet.numbers}
      date={bet.date}
      price={bet.price}
      name={bet.name}
      color={bet.color} />
    })}
  </div>
};

export default Bets;
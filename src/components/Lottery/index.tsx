import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BetItem from './BetItem';
import Navbar from './Navbar';
import Bet from "../../utils/Bet";

const Lottery: React.FC<{bets: Bet[]}> = (props) => {
  const [bets, setBets] = useState<Bet[]>([])
  const [betsFilter, setBetsFilter] = useState<Bet[]>([])

  useEffect(() => {
    setBets(props.bets)
  }, [props.bets])

  useEffect(() => {
    setBetsFilter(bets)
  }, [bets])

  const onFilterHandler = (name: string) => {
    setBetsFilter(bets)
    setBetsFilter(betsFilter.filter((bet) => bet.name === name))
  }

  return <div>
    <Navbar />
    <div className="container">
      <div className="row mt-5">
        <div className="col-3 gray">Recent Games</div>
        <div className="col-7 gray-sm">Filters:
          <div className="row">
            {bets.map((bet, index) => {
              return <div className="col m-2 text-center" style={
                {
                  color: bet.color,
                  border: `2px solid ${bet.color}`,
                  borderRadius: '45%'
                }
              } onClick={onFilterHandler.bind(this, bet.name)}
              key={index} >
                {bet.name}
              </div>
            })}
          </div>
        </div>
        <div className="col-2 text-center">
          <Link to="/new-bet" className="green">New Bet</Link>
        </div>
      </div>
      <div className="row">
        <div>
          {betsFilter.map((bet, index) => {
            return <BetItem
              key={index}
              numbers={bet.numbers}
              date={bet.date}
              price={bet.price}
              name={bet.name}
              color={bet.color} />
          })}
        </div>
      </div>
    </div>
  </div>
};

export default Lottery;
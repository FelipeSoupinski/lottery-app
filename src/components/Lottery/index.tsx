import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BetItem from './BetItem';
import Navbar from './Navbar';
import Bet from "../../utils/Bet";

const Lottery: React.FC<{}> = () => {
  const DUMMY_BETS = useMemo(() => {
    return [
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 2.5,
        name: 'Lotofácil',
        color: '#7f3992'
      },
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 3.5,
        name: 'Megasena',
        color: '#01ac65'
      },
      {
        numbers: '01, 02, 03, 04, 05, 06, 07, 13',
        date: '30/11/2020',
        price: 4.5,
        name: 'Lotomania',
        color: '#f79c31'
      },
    ]
  }, [])

  const [bets, setBets] = useState<Bet[]>([])
  const [betsFilter, setBetsFilter] = useState<Bet[]>([])

  useEffect(() => {
    setBets(DUMMY_BETS)
  }, [DUMMY_BETS])

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
            {bets.map((bet) => {
              return <div className="col m-2 text-center" style={
                {
                  color: bet.color,
                  border: `2px solid ${bet.color}`,
                  borderRadius: '45%'
                }
              } onClick={onFilterHandler.bind(this, bet.name)}>
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
import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import BetItem from './BetItem';
import BetsContext from "../../utils/Context/BetsContext";
import GamesFilterContext from "../../utils/Context/BetsFilterContext";
import GamesContext from "../../utils/Context/GamesContext";

const Lottery: React.FC<{}> = (props) => {
  const { state: betsFilterState, setState: setBetsFilterState } = useContext(GamesFilterContext)
  const { state: gamesState } = useContext(GamesContext)
  const { state: betsState } = useContext(BetsContext)

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
  }

  useEffect(() => {
    setBetsFilterState({ bets: betsState, gameActive: betsFilterState.gameActive })
  }, [betsState, betsFilterState.gameActive, setBetsFilterState])

  const onFilterHandler = (name: string) => {
    name === 'All' ? setBetsFilterState({ bets: betsState, gameActive: '' })
      : setBetsFilterState({ bets: betsState, gameActive: name })
  }

  return <div>
    <Navbar />
    <div className="container">
      <div className="row mt-5">
        <div className="col-3 gray">Recent Games</div>
        <div className="col-7 gray-sm">Filters:
          <div className="row">
            {<div className="col m-2 text-center" style={
              {
                color: 'black',
                border: '2px solid black',
                borderRadius: '45%',
                cursor: 'pointer'
              }
            } onClick={onFilterHandler.bind(this, 'All')}
              key={'all'} >
              All
            </div>}
            {gamesState.map((game, index) => {
              return <div className="col m-2 text-center" style={
                {
                  color: game.color,
                  border: `2px solid ${game.color}`,
                  borderRadius: '45%',
                  cursor: 'pointer'
                }
              } onClick={onFilterHandler.bind(this, game.name)}
                key={index} >
                {game.name}
              </div>
            })}
          </div>
        </div>
        <div className="col-2 text-center">
          <Link to="/new-bet" className="green">New Bet</Link>
        </div>
      </div>
      <div className="row">
        <div style={{ maxHeight: '65vh', overflowY: 'auto', maxWidth: 'max-content' }}>
          {
            betsFilterState.gameActive === '' ?
              betsState.map((bet, index) => {
                return <BetItem
                  key={index}
                  numbers={bet.numbers.toString()}
                  date={bet.date}
                  price={bet.price}
                  name={bet.name}
                  color={bet.color} />
              })
              :
              betsFilterState.bets.map((bet, index) => {
                if (bet.name === betsFilterState.gameActive) {
                  return <BetItem
                    key={index}
                    numbers={bet.numbers.toString()}
                    date={bet.date}
                    price={bet.price}
                    name={bet.name}
                    color={bet.color} />
                }
              })
          }
        </div>
      </div>
    </div>
  </div>
};

export default Lottery;
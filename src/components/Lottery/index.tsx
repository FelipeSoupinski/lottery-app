import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GameItem from './GameItem';
import Navbar from './Navbar';
import Game from "../../utils/Game";
import BetsContext from "../../utils/GamesContext";

const Lottery: React.FC<{}> = (props) => {
  const [gamesFilter, setGamesFilter] = useState<Game[]>([])

  const { state: betsState } = useContext(BetsContext)

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
  }

  useEffect(() => {
    setGamesFilter(betsState)
  }, [betsState])

  const onFilterHandler = (name: string) => {
    setGamesFilter(betsState)
    setGamesFilter(gamesFilter.filter((game) => game.name === name))
  }

  return <div>
    <Navbar />
    <div className="container">
      <div className="row mt-5">
        <div className="col-3 gray">Recent Games</div>
        <div className="col-7 gray-sm">Filters:
          <div className="row">
            {betsState.map((bet, index) => {
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
          {gamesFilter.map((game, index) => {
            return <GameItem
              key={index}
              numbers={game.numbers}
              date={game.date}
              price={game.price}
              name={game.name}
              color={game.color} />
          })}
        </div>
      </div>
    </div>
  </div>
};

export default Lottery;
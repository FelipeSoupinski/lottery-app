import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GameItem from './GameItem';
import Navbar from './Navbar';
import Game from "../../utils/Game";
import DiffGames from "../../utils/DiffGame";
import BetsContext from "../../utils/Context/GamesContext";
import GamesFilterContext from "../../utils/Context/GamesFilterContext";

const Lottery: React.FC<{}> = (props) => {
  const { state: gamesFilterState, setState: setGamesFilterState } = useContext(GamesFilterContext)
  const { state: betsState } = useContext(BetsContext)

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
  }

  useEffect(() => {
    setGamesFilterState({ games: betsState, gameActive: gamesFilterState.gameActive })
  }, [betsState, gamesFilterState.gameActive, setGamesFilterState])

  const onFilterHandler = (name: string) => {
    name === 'All' ? setGamesFilterState({ games: betsState, gameActive: '' })
      : setGamesFilterState({ games: betsState, gameActive: name })
  }

  const getDiffGames = (games: Game[]) => {
    const diffGames: DiffGames[] = []
    games.forEach((game) => {
      if (diffGames.findIndex((value) => value.name === game.name) === -1) {
        diffGames.push({ name: game.name, color: game.color })
      }
    })
    return diffGames
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
            {getDiffGames(betsState).map((bet, index) => {
              return <div className="col m-2 text-center" style={
                {
                  color: bet.color,
                  border: `2px solid ${bet.color}`,
                  borderRadius: '45%',
                  cursor: 'pointer'
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
          {
            gamesFilterState.gameActive === '' ?
              betsState.map((game, index) => {
                return <GameItem
                  key={index}
                  numbers={game.numbers}
                  date={game.date}
                  price={game.price}
                  name={game.name}
                  color={game.color} />
              })
              :
              gamesFilterState.games.map((game, index) => {
                if (game.name === gamesFilterState.gameActive) {
                  return <GameItem
                    key={index}
                    numbers={game.numbers}
                    date={game.date}
                    price={game.price}
                    name={game.name}
                    color={game.color} />
                }
              })
          }
        </div>
      </div>
    </div>
  </div>
};

export default Lottery;
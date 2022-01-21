import { useContext } from "react"
import BetsContext from "../../utils/Context/BetsContext"
import GamesContext from "../../utils/Context/GamesContext"
import BetsFilterContext from "../../utils/Context/BetsFilterContext"

const FilterGames: React.FC = () => {
  const { setState: setBetsFilterState } = useContext(BetsFilterContext)
  const { state: gamesState } = useContext(GamesContext)
  const { state: betsState } = useContext(BetsContext)

  const onFilterHandler = (name: string) => {
    name === 'All' ? setBetsFilterState({ bets: betsState, gameActive: '' })
      : setBetsFilterState({ bets: betsState, gameActive: name })
  }

  return <div className="col-7 gray-sm">Filters:
    <div className="row">
      {<div id="allBets" className="col m-2 text-center" style={
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
        return <div id={game.name} className="col m-2 text-center" style={
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
}

export default FilterGames
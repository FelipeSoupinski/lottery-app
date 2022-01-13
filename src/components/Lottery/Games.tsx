import { useEffect, useState } from "react";
import Game from "../../utils/Game";
import GameItem from './GameItem';

const Games: React.FC<{games: Game[]}> = (props) => {
  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    setGames(props.games)
  }, [props.games])

  return <div>
    {games.map((game, index) => {
      return <GameItem 
      key={index}
      numbers={game.numbers}
      date={game.date}
      price={game.price}
      name={game.name}
      color={game.color} />
    })}
  </div>
};

export default Games;
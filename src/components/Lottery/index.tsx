import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import BetsFilterContext from "../../utils/Context/BetsFilterContext";
import BetsContext from "../../utils/Context/BetsContext";
import FilterGames from "./FilterGames";
import BetsList from "./BetsList";
import Navbar from './Navbar';

const Lottery: React.FC<{}> = () => {
  const { state: betsFilterState, setState: setBetsFilterState } = useContext(BetsFilterContext)
  const { state: betsState } = useContext(BetsContext)

  useEffect(() => {
    setBetsFilterState({ bets: betsState, gameActive: betsFilterState.gameActive })
  }, [betsState, betsFilterState.gameActive, setBetsFilterState])

  return <div>
    <Navbar />

    <div className="container">
      <div className="row mt-5">
        <div className="col-3 gray">Recent Games</div>

        <FilterGames />

        <div className="col-2 text-center">
          <Link to="/new-bet" className="green">New Bet</Link>
        </div>
      </div>

      <BetsList />

    </div>
  </div>
};

export default Lottery;
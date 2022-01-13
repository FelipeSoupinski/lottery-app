import { useContext } from "react";
import NewBetContext from "../../utils/Context/NewBetContext";
import CompleteGame from "./CompleteGame";
import AddToCart from "./AddToCart";
import ClearGame from "./ClearGame";
import CardNewBet from "./CardNewBet";
import Navbar from "../Lottery/Navbar";
import ChooseGame from "./ChooseGame";
import Options from "./Options";

const NewBet: React.FC<{}> = (props) => {
  const { state: newBetState } = useContext(NewBetContext)

  return <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row mt-3">
            <p style={{ fontStyle: 'italic' }}>
              <span className="gray-sm">NEW BET</span> FOR {newBetState.gameSelected.name.toUpperCase()}
            </p>
          </div>
          
          <ChooseGame />
          
          <div className="row mt-2">
            <p className="gray-sm">Fill your bet</p>
            <p style={{ color: 'gray' }}>Mark as many numbers as you want up to a maximum of 50.
              Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</p>
          </div>

          <Options />

          <div className="row mt-4">
            <CompleteGame />
            <ClearGame />
            <AddToCart />
          </div>

        </div>

        <div className="col-4">
          <CardNewBet />
        </div>

      </div>
    </div>
  </div>
}

export default NewBet;
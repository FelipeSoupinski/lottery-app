import { useContext } from 'react';
import BetItem from './BetItem';
import BetsContext from '../../utils/Context/BetsContext';
import BetsFilterContext from '../../utils/Context/BetsFilterContext';

const BetsList: React.FC = () => {
  const { state: betsFilterState } = useContext(BetsFilterContext)
  const { state: betsState } = useContext(BetsContext)

  return <div className="row">
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
            return null
          })
      }
    </div>
  </div>
}

export default BetsList
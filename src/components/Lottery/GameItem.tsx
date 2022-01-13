const GameItem: React.FC<{
  numbers: string,
  date: string,
  price: number,
  name: string,
  color: string,
}> = (props) => {
  return <div className="row mt-3 p-2" style={
    {
      borderLeft: `2px solid ${props.color}`
    }
  }>
    <div className="row">{props.numbers}</div>
    <div className="row">{props.date} - (R${props.price})</div>
    <div className="row" style={{ color: props.color }}>{props.name}</div>
  </div>
};

export default GameItem;
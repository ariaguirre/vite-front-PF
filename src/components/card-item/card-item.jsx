const CardItem = ({cardItem}) => {
  const {title, quantity} = cardItem;  
  
  return (
    <div>
      <h2>{title}</h2>
      <span>{quantity}</span> 
    </div>
  )
}

export default CardItem
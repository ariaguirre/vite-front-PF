import Carousel from "../carousel/carousel";

const DetailComponent = ({productDetail}) => {
  const { 
    name, 
    price,
    rating,
    reviews,
    stock,
    categories,
    description,
    imageUrl 
  } = productDetail;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{rating}</p>
    {
      reviews.map(({user,review,data, rating })=> (
      <div key={user}>
        <p>{user}</p>
        <p>{review}</p> 
        <p>{data}</p>
        <p>{rating}</p>
      </div>))
    }
      <p>{stock}</p>
      <p>{categories}</p>
      <p>{description}</p>
      <Carousel img = {imageUrl} />

    </div>
    
  )
}

export default DetailComponent
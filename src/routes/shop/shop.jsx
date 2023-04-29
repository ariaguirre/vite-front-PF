import Container from '@mui/material/Container'
import Card from "../../components/card/card"
import { products } from '../../utils/data/data'
const Shop = () => {
  return (
    <Container maxWidth="xl">
      {
        products.map((products) => (
          <Card
            key={products.id}
            id={products.id}
            imageUrl={products.imageUrl}
            categories={products.categories}
            title={products.title}
            price={products.price}
            sale={products.sale}
            rating={products.rating}
            reviews={products.reviews}
            stock={products.stock}
          />
        ))
      }

    </Container>
  )
}

export default Shop

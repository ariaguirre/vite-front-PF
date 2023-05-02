import Container from '@mui/material/Container'
import CardInf from "../../components/card/card"
import {products} from '../../utils/data/data'
import { Grid } from '@mui/material'
const Shop = () => {
  return (
    <Container maxWidth="xl" sx={{minHeight:"100vh"}}   >    
        <Grid container justifyContent={"center"}>        
        {
        products.map((products) => (
          <CardInf
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
      </Grid>    
    </Container>
  )
}

export default Shop

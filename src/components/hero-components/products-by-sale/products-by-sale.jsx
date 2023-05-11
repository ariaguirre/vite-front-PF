import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardInf from "../../card/card";


const ProductsBySale = () => {
  const { products } = useSelector(state => state.products);
  const sortedProductsBySale = [...products].sort((a, b) => b.sale.discount - a.sale.discount).slice(0, 4)
  return (  
    
    <div>
      <Typography variant="h3" color="primary" align="center" mt={"2rem"}>Productos recomendados</Typography>
      <Grid container justifyContent={"center"}  >
        {
          sortedProductsBySale.length ? sortedProductsBySale.map((sortedProductsByRating, i) => (
            <CardInf
              key={`${sortedProductsByRating.id}+${i}`}
              id={sortedProductsByRating.id}
              imageUrl={sortedProductsByRating.imageUrl[0]}
              title={sortedProductsByRating.name}
              price={sortedProductsByRating.price}
              sale={sortedProductsByRating.sale}
              rating={sortedProductsByRating.rating}
            />
          )) : (null)
        }
      </Grid>
    </div>
  )
}

export default ProductsBySale
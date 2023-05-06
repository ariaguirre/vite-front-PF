import { Card, Grid } from "@mui/material";
import style from "./filtersComponent.module.css";
import FiltersBar from "../filters-bar/filtersBar";
import { useDispatch, useSelector } from "react-redux";
import CardInf from "../card/card";
import { getProducts } from "../../utils/firebase/firebaseClient";
import { getProductsActions } from '../../features/products/productSlice'

const FiltersComponent = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
 
  window.onload = async () => {
    if(products.length < 1){
      const result = await getProducts()
      dispatch(getProductsActions(result))
    }
  }

  const sortedProductsByRating = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 1);
  return (
    <Grid
      item
      justifyContent={"center"}
      xs={12}
      sm={3}
      maxWidth={"45vh"}
    >
      <Grid item xs={12} sm={3} className={style.categoryContainer}>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          border={1}
          borderRadius={2}
        >
          Categorias
        </Grid>
        <FiltersBar />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          border={1}
          borderRadius={2}
        >
          Filtros
        </Grid>
        <Grid className={style.categoryContainer}>Aca los filtros</Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
            <Grid
            container
            alignContent={"center"}
            justifyContent={"center"}
            border={1}
            borderRadius={2}
            >
            Destacados
            </Grid>
            <Grid
            container
            alignContent={"center"}
            justifyContent={"center"}
            className={style.cardContainer}
            border={1}
            >
            {sortedProductsByRating.length
                ? sortedProductsByRating.map((sortedProductsByRating, i) => (
                    <Card key={i} style={{marginRight: '1rem'}}>
                    <CardInf
                        key={`${sortedProductsByRating.id}+${i}`}
                        id={sortedProductsByRating.id}
                        imageUrl={sortedProductsByRating.imageUrl[0]}
                        title={sortedProductsByRating.name}
                        price={sortedProductsByRating.price}
                        sale={sortedProductsByRating.sale}
                        rating={sortedProductsByRating.rating}
                    />
                    </Card>
                ))
                : null}
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FiltersComponent;

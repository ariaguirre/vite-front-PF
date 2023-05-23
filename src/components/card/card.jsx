//react Imports
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//mui Components
import styles from './card.module.css';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import { CardContent, CardHeader, IconButton, Typography, Box, Button } from "@mui/material";
//Icons 
import Sale from "./sale/sale";
import HalfRatingPreview from "./rating/rating-preview";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//Helpers
import { numberFormat } from "../../helper/numberFormat";
//redux 
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cartSlice/cartSlice";

const CardInf = (
  {
    imageUrl,
    title,
    price,
    sale,
    rating,
    id,
  }
) => {

  const onSale = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [salePrice, setSalePrice] = useState(0)


  if (Object.keys(sale).length !== 0) {
    onSale.current = true;
  } else {
    onSale.current = false;
  }

  price = Number(price);

  let priceOrSale = salePrice === 0 ? price : salePrice

  const handleClickCartIcon = () => {

    const product = {
      id,
      title,
      imageUrl,
      price: priceOrSale,
    }
    dispatch(addItemToCart(product));
  }

  const handleDetailsClick = () => {
    navigate(`/detail/${id}`);
  }

  return (
    <Card sx={{ Width: "300px", margin: "1rem" }} className={styles.card} >
      <CardMedia
        component="img"
        title={title}
        src={imageUrl}
        alt={title}
        sx={{ maxHeight: "220px", width: "100%", objectFit: "contain" }}
      />
      <CardContent sx={{ py: 0 }}>
        <div className={styles.infCard}>
          <CardHeader title={title} className={styles.titleCard} sx={{ padding: 0, userSelect: "none" }} />
          {
            onSale.current
              ? <Sale price={price} sale={sale} setSalePrice={setSalePrice}/> 
              : <Typography variant="h5" color="initial" sx={{ userSelect: "none" }} align="left">{numberFormat(price)}</Typography>
          }
          {
            onSale.current
            && <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                sx={{
                  textDecorationLine: "line-through",
                  paddingRight: "1rem",
                  userSelect: "none"
                }}
              >
                {`${numberFormat(price)}`}
              </Typography>
              <Box
                component="span"
                sx={{
                  paddingTop: "0.125rem",
                  paddingBottom: "0.125rem",
                  paddingLeft: "0.375rem",
                  paddingRight: "0.375rem",
                  backgroundColor: "rgba(26, 200, 219,0.7)",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  borderRadius: "0.375rem",
                  userSelect: "none"
                }}>
                {`save ${sale.discount}%`}
              </Box>
            </Box>
          }

          <Box>
            <HalfRatingPreview rValue={rating} />
          </Box>
          <CardActions sx={{ padding: 0 }}>
            <Button variant="contained" color="primary" onClick={handleDetailsClick}>
              Details
            </Button>
            <IconButton onClick={handleClickCartIcon}>
              <AddShoppingCartIcon color="primary" />
            </IconButton>
          </CardActions>
        </div>

      </CardContent>

    </Card>

  )
}

export default CardInf
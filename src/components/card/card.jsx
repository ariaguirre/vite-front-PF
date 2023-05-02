//react Imports
import { useRef, useState } from "react";
//mui Components
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import { CardContent, CardHeader, IconButton, Typography, Box, Button } from "@mui/material";
//Icons 
import FavoriteIcon from '@mui/icons-material/Favorite';
import Sale from "./sale/sale";
import HalfRating from "./rating/rating";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//Helpers
import { numberFormat } from "../../helper/numberFormat";

const CardInf = (
  {
    imageUrl,
    title,
    price,
    sale,
  }
) => {

  const [ratingValue, setRatingValue] = useState(null);
  const onSale = useRef(false);

  if (Object.keys(sale).length !== 0) {
    onSale.current = true;
  }

  return (
    <Card sx={{ minWidth: "300px", margin: "1rem" }}>
      <CardMedia
        component="img"
        title={title}
        src={imageUrl}
        alt={title}
        sx={{ maxHeight: "220px", width: "100%", objectFit: "contain", userSelect:"none"}}
      />
      <CardContent>
        <CardHeader title={title} sx={{ padding: 0, userSelect:"none" }} />
        <Box 
          display={"flex"}
          flexDirection={"column"}
          minHeight={130}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          {
            onSale.current
              ? <Sale price={price} sale={sale} />
              : <Typography variant="h5" color="initial" sx={{userSelect:"none"}}>{numberFormat(price)}</Typography>
          }
          {
            onSale.current
            && <Box sx={{ display: "flex" }}>
              <Typography
                variant="body1"
                sx={{
                  textDecorationLine: "line-through",
                  paddingRight: "1rem",
                  userSelect:"none"
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
                  userSelect:"none"
                }}>
                {`save ${sale.discount}%`}
              </Box>
            </Box>
          }

          <Box>
            <HalfRating rValue={ratingValue} sValue={setRatingValue} />
          </Box>
          <CardActions sx={{padding:0}}>
            <Button variant="contained" color="primary">
              Details
            </Button>
            <IconButton>
              <FavoriteIcon color="warning" />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon color="primary" />
            </IconButton>
          </CardActions>
        </Box>

      </CardContent>

    </Card>

  )
}

export default CardInf
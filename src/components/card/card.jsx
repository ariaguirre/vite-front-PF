//react Imports
import { useRef } from "react";
//mui Components
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import { CardContent, CardHeader, IconButton, Typography, Box, Button } from "@mui/material";
//Icons 
import FavoriteIcon from '@mui/icons-material/Favorite';
import Sale from "./sale/sale";
import HalfRating from "./rating/rating";


const CardInf = (
  {
    imageUrl,
    title,
    price,
    sale,
  }
) => {

  const onSale = useRef(false);

  if (Object.keys(sale).length !== 0) {
    onSale.current = true;
  }

  return (
    <Card sx={{ maxWidth: "300px", margin:"1rem"}}>
      <CardMedia
        component="img"
        title={title}
        src={imageUrl}
        alt={title}
        sx={{ maxHeight: "220px", width:"100%", objectFit:"contain"}}
      />
      <CardHeader
        title={title}
      />
      <CardContent sx={{ padding: 0, paddingLeft: "1rem" }}>
        {
          onSale.current
            ? <Sale price={price} sale={sale} />
            : <Typography variant="h5" color="initial">{price}</Typography>
        }
        {
          onSale.current
          && <Box sx={{display:"flex" }}>
            <Typography variant="body1" sx={{ textDecorationLine: "line-through", paddingRight:"1rem" }}>{`$ ${price}`}</Typography>
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
              }}>
              {`save ${sale.discount}%`}
            </Box>
          </Box>

        }
      </CardContent>
      <HalfRating />
      <CardActions>        
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
        <IconButton>
          <FavoriteIcon color="warning" />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardInf
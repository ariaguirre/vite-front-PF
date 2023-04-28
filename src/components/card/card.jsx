import { useRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';


const Sale = ({ sale, price }) => {

  return (
    <Box sx={{
      display: "flex",
      marginTop: "0.25rem",
      alignItems: "center",
      gap: "0.5rem",
    }}>
      <Box component={"span"} sx={{
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        textDecoration: "line-through",
      }}>
        {price}
      </Box>
      <Box sx={{
        paddingTop: "0.125rem",
        paddingBottom: "0.125rem",
        paddingLeft: "0.375rem",
        paddingRight: "0.375rem",
        backgroundColor: "#34D399",
        color: "#ffffff",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        borderRadius: "0.375rem",
      }}>
        {`save ${sale.discount}%`}
      </Box>
    </Box>
  );
};

const Card = ({
  id,
  imageUrl,
  categories,
  title,
  price,
  sale,
  rating,
  reviews,
  stock,
}) => {

  const priceRef = useRef(null);
  const onSale = useRef(false);

  if (Object.keys(sale).length !== 0) {
    onSale.current = true;
    const perc = Number(price) * (sale.discount * 0.01);
    priceRef.current
      = Number(price) - perc;
  }

  return (

    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "#374151",
        width: "18rem",
        borderRadius: "0.375rem",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
      minHeight={"10rem"}
      minWidth={"5rem"}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", maxHeight: "350px" }}>
        <img src={imageUrl}></img>
      </Box>
      {/* badge */}
      <Box sx={{
        display: "flex",
        padding: "1.25rem",
        flexDirection: "column",
        gap: "0.75rem",
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}>
          <Box sx={{
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            backgroundColor: "#F3F4F6",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            borderRadius: "9999px",
          }}>Monitor</Box>
          <Box sx={{
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            backgroundColor: "#F3F4F6",
            fontSize: "0.75rem",
            lineHeight: "1rem",
            borderRadius: "9999px",
          }}>Badge</Box>

        </Box>


      </Box>


      {/* produc title */}
      <Typography variant="h6" color="initial" align='justify'>
        {title}
      </Typography>
      {/* produc price */}
      <Box>
        <Box sx={{
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          fontWeight: "700",
        }}>
          {onSale.current ? ` $ ${priceRef.current}.000` : ` $ ${price}`}
        </Box>
        {onSale.current && <Sale price={price} sale={sale} />}
      </Box>
      {/* product raiting  */}
      <span className="flex items-center mt-1">
        starts
        <span>0 reviews</span>
      </span>
      {/* Product action button */}
      <Box sx={{
        display: "flex",
        marginTop: "1.25rem",
        gap: "0.5rem",
      }}>
        <Button variant="outlined" color="primary" startIcon={<AddShoppingCartIcon/>}>
          Add to the cart
        </Button>
        <Button variant="outlined" color="warning" startIcon={<FavoriteIcon/>} />
          
      </Box>
    </Box>
  )
}

export default Card;

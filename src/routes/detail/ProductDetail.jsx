/* eslint-disable react-hooks/exhaustive-deps */
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material';
//redux
import { getProductByid } from '../../utils/firebase/firebaseClient';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getProductId } from '../../features/productsId/productsIdSlice';
import HalfRating from '../../components/card/rating/rating';
import { addItemToCart } from '../../features/cartSlice/cartSlice';


const DetailProduct = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const {productsId} = useSelector((state) => state.productsId);

  useEffect(() =>{
  (async function unit(){
      const result = await getProductByid(id)
      dispatch(getProductId(result))
    })()
  },[])
  
  var cantidad = [];

  const handleCant = (e) =>{
    cantidad.push(e.target.value)
  }


  const handleClickCartIcon = () => {
    const product = {
      id:productsId[0]?.id,
      title:productsId[0]?.name,
      imageUrl:productsId[0]?.imageUrl,
      price:productsId[0]?.price,    
    }
    
    for(let i = 0; i<cantidad[0]; i++){
      dispatch(addItemToCart(product));
    }
  }




  return <>
    <Container fixed>
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} justifyContent="center" sx={{ px: "2rem", py: "2rem" }}>
        <Box sx={{maxWidth:'50%' }}>
          <img src={productsId[0]?.imageUrl} alt={productsId[0]?.name} />

        </Box>

        <div>
          <form>
            <Typography variant="h3">
              {productsId[0]?.name}
            </Typography>

            <hr />

            <div>
              <p>precio:<span>$</span><span>
                {productsId[0]?.price}
                </span></p>
              <Stack>
                <p>estrellas:</p>
                <HalfRating  />
              </Stack>
              <p>Unidades disponibles en stock:<span>{productsId[0]?.stock}</span></p>
              <Stack direction="row" >
                <p>Cantidad:</p>
                <input type="number" min='0' onChange={(e) =>handleCant(e)} value={1} className="cant" />
              </Stack>
              <Stack direction="row" alignContent={'center'} gap={2} >
                <Button variant="contained" sx={{ mt: 2, mb: 2 }} onClick={handleClickCartIcon} startIcon={<AddIcon />}>Agregar al carrito</Button>
                <Link to="/shop/checkout">
                  <Button variant="contained" sx={{ mt: 2, mb: 2 }}  startIcon={<AddShoppingCartIcon />}>Ir al carrito</Button>
                </Link>
              </Stack>

            </div>
            <hr />
            <div>
              <h3>Tipos de entrega</h3>
              <p>Retiro en tienda:</p>
              <p>Disponible para despacho</p>
            </div>
          </form>
        </div>

      </Stack>

      <Box p={4} borderRadius={8} bgcolor={'#f4f4f4'} mb={2}>
        <Typography variant='h3' fontSize={30} fontWeight={500}>
          Reseñas del producto
        </Typography>
        <Box>
          {
            productsId[0]?.reviews.length < 1 ? <span>No hay comentarios</span> : productsId[0]?.reviews[0] 

          }
        </Box>
            
      </Box>


    </Container>
  </>
}

export default DetailProduct;
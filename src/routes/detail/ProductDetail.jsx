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


const DetailProduct = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const p = useSelector((state) => state.productsId);
  let detail = p.productsId[0];
  console.log(detail)

  useEffect(() =>{
    const unit = async () =>{
      const result = await getProductByid(id)
      dispatch(getProductId(result))
    }
    unit()
  },[dispatch])
  


  return <>
    <Container fixed className="detail">
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} justifyContent="center" sx={{ px: "2rem", py: "2rem" }}>
        <Box sx={{maxWidth:'50%' }}>
          <img src={detail.imageUrl} className=" imgDetail" alt={detail.name} />

        </Box>

        <div className=" infDetail">
          <form>
            <Typography variant="h3">
              {detail.name}
            </Typography>

            <hr />

            <div className="infoInicial">
              <p>precio:<span className='money' color='green'>$</span><span className='price'>{detail.price}</span></p>
              <Stack>
                <p>estrellas:</p>
                <HalfRating rValue={detail.rating} />
              </Stack>
              <p>Unidades disponibles en stock:<span>{detail.stock}</span></p>
              <Stack direction="row" >
                <p>Cantidad:</p>
                <input type="number" min='0' className="cant" />
              </Stack>
              <Stack direction="row" alignContent={'center'} gap={2} >
                <Button variant="contained" sx={{ mt: 2, mb: 2 }} startIcon={<AddIcon />}>Agregar al carrito</Button>
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


            
      </Box>


    </Container>
  </>
}

export default DetailProduct;
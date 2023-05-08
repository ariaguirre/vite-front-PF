/* eslint-disable react-hooks/exhaustive-deps */
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom'
import { Button } from '@mui/material';
//redux
import { getProductByid } from '../../utils/firebase/firebaseClient';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getProductId } from '../../features/productsId/productsIdSlice';
import HalfRating from '../../components/card/rating/rating';
import styles from "./productDetail.module.css";
import { addItemToCart,  deleteCartItem } from '../../features/cartSlice/cartSlice';


const DetailProduct = () => {

  const { id } = useParams()
  const dispatch = useDispatch();
  const {productsId} = useSelector((state) => state.productsId);
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() =>{
  (async function unit(){
      const result = await getProductByid(id)
      dispatch(getProductId(result))
    })()
  },[])
  

  console.log(cartItems)
  const { quantity } = cartItems;

 
  const addItemHandler = () => dispatch(addItemToCart({id}));
  const removeItemHandler = ()=> dispatch(deleteCartItem({id}))

  const handleClickCartIcon = () => {
    const product = {
      id:productsId[0]?.id,
      title:productsId[0]?.name,
      imageUrl:productsId[0]?.imageUrl,
      price:productsId[0]?.price,    
    }
      dispatch(addItemToCart(product));

  }




  const newLocal = (styles.contenedor, styles.infBaseDetail);

  
  return <>
    <div className={styles.contenedor}>
      <div className={styles.detailTop}>
        
        <div className={styles.imgProduct}>
          <img src={productsId[0]?.imageUrl} alt={productsId[0]?.name} />
        </div>

        <div className={styles.infBaseDetail}>
          <form>
            <h2 className={styles.titleDetail}>{productsId[0]?.name}</h2>

            <hr className={styles.division} />

            <div className={styles.infBaseDetail}>
              <p className={styles.price}><span className={styles.money}>$</span>{productsId[0]?.price}</p>
              <div className={styles.rating}>
                <span>Calificación:</span>
                <HalfRating  />
              </div>
              <p><span>Unidades disponibles:</span>{productsId[0]?.stock}</p>
              <div className={styles.flex} >
                <span>Cantidad:</span>
                  <div className={styles.flex}>
                  <div onClick={()=> removeItemHandler()}> &#10094;</div>
                  <span >{quantity}</span>        
                  <div   onClick={() => addItemHandler()}>&#10095;</div>
                </div>
              </div>
              <div className={styles.detailBuy} >
                <Button variant="contained"  onClick={handleClickCartIcon} startIcon={<AddIcon />}>Agregar al carrito</Button>
                <Link to="/shop/checkout">
                  <Button variant="contained" className={styles.btn} startIcon={<AddShoppingCartIcon />}>Ir al carrito</Button>
                </Link>
              </div>
            </div>

            <hr className={styles.division}  />
            <div className={styles.infBaseDetail}>
              <h3>Tipos de entrega</h3>
              <p><span>Retiro en tienda:</span></p>
              <p><span>Disponible para despacho</span></p>
            </div>
          </form>
        </div>

      </div>

      <div className={newLocal}>
        <h3 className={styles.titleDetail}>Reseñas del producto</h3>
        {/* <Stack sx={{pl:"2rem"}}>
          {productsId[0]?.length < 1 ? <p>No hay reseñas</p> : productsId[0]?.reviews.map((r, index) =>{ return (<Box key={index}>
            <p>Usuario:{r.user}</p>
            <p>Reseña:{r.review}</p>
            <p>Fecha de la reseña:{r.date}</p>

          </Box>)}) }
        </Stack> */}
            
      </div>


    </div>
  </>
}

export default DetailProduct;
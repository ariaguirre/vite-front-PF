import Container from '@mui/material/Container'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './productDetail.module.css';
import { useEffect, useState } from 'react';

import noAvialableProduct from "../../utils/img/producto-no-disponible.png";
import Typography from '@mui/material/Typography'
import DetailComponent from '../../components/detail-component/detail-component';
import { getProductByid } from '../../utils/firebase/firebaseClient';

const DetailProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getProductDetail(id);
  }, [id])

  const getProductDetail = async (id) => {
    try {
      const product = await getProductByid(id)
      setProduct(product[0])
    } catch (error) {
      console.error(error);
    }
  }

  return (
    product.active
      ?
      <Container maxWidth="xl">
        <div className={styles.detailContainer}>
          <DetailComponent productDetail = {product} />
        </div>
      </Container>
      :
      <Container maxWidth="xl">
        <div className={styles.detailContainer}>
          <h2>Producto no displonible</h2>
          <img src={noAvialableProduct} alt="noAvialableProduct" />
          <Typography variant="h2" align='center'>Disculpe las molestias</Typography>
          <Link to="/shop">Home</Link>
        </div>
      </Container>
  )
}

export default DetailProduct;
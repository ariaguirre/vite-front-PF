import Carousel from "../../carousel/carousel";
import Container from '@mui/material/Container'
import styles from "./detail-component.module.css"
import NoReview from "../no-review/no-review";
import { numberFormat } from "../../../helper/numberFormat";
import HalfRatingPreview from "../../card/rating/rating-preview";
import ReviewComponent from "../review-component/review-component";
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../features/cartSlice/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
import PostReview from "../post-review/post-review";
import Sale from "../../card/sale/sale";

import { v4 } from "uuid";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
import { useRef } from "react";

const DetailComponent = ({ productDetail, productId }) => {


  const [purchasedProducts, setPurchasedProducts] = useState();
  const [bought, setBought] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [salePrice, setSalePrice] = useState(0)
  const onSale = useRef(false);

  const { userData } = useSelector(state => state.persistedReducer.userData);
  const {imageUrl, name, price, sale, rating, reviews, stock, categories, description } = productDetail;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;
    if (!userData?.onlinePurchases.length) return setPurchasedProducts(null)

    const purchases = userData?.onlinePurchases
    const allProducts = [];

    purchases.forEach(purchase => {
      const { products } = purchase;
      products.forEach(product => {
        allProducts.push(product);
      })
    })

    setPurchasedProducts(allProducts)

  }, [userData])

  useEffect(() => {
    if (!purchasedProducts) return;
    setBought(!!purchasedProducts.find(({ id }) => id === productId));
  }, [productId, purchasedProducts]);

  let priceOrSale = salePrice === 0 ? price : salePrice
 
  if (Object.keys(sale).length !== 0) {
    onSale.current = true;
  } else {
    onSale.current = false;
  }
 

  const handleClickCart = () => {
    const product = {
      id: productId,
      title: name,
      imageUrl: imageUrl[0],
      price: priceOrSale
    }
    dispatch(addItemToCart(product));
  }

  useEffect(() => {
    const wasReviewed = reviews.find(review => review.user === userData?.displayName)
    wasReviewed ? setReviewed(true) : setReviewed(false)
  }, [reviews, userData?.displayName])


  return (
    <Container maxWidth="xl">
      <div className={styles.carouselContainer}>
        <div className={styles.ImageSliderContainer}>
          <Carousel images={imageUrl} />
        </div>
        <div className={styles.attributes}>
          <h2>{name}</h2>
          <div className={styles.detailsData}>
            <Typography variant="body1" color="primary" sx={{ textTransform: "uppercase" }}>Rating: {rating}</Typography>
            <HalfRatingPreview rValue={rating} />
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
                {`- ${sale.discount}%`}
              </Box>
            </Box>
          }
            <span className={styles.stock}>En stock: {stock}</span>
            <IconButton onClick={handleClickCart}>
              <AddShoppingCartIcon color="primary" />
            </IconButton>
            <span className={styles.categories}>
              {
                categories.map((category, i) => (<p key={`${category}${i}`} >{category}</p>))
              }
            </span>
            <div >
            </div>
            <span className={styles.description}>{description}</span>
          </div>
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        {
          reviewed || bought && <PostReview userData={userData} uid={productId} allReviews={reviews} />
        }
        {reviews?.length !== 0
          ? reviews.map((review) => <ReviewComponent key={v4()} reviewInf={review} />)
          : <NoReview />
        }
      </div>
    </Container>


  )
}

export default DetailComponent
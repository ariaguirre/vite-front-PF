import Carousel from "../carousel/carousel";
import Container from '@mui/material/Container'

import styles from "./detail-component.module.css"
import NoReview from "../no-review/no-review";
import { numberFormat } from "../../helper/numberFormat";
import HalfRatingPreview from "../card/rating/rating-preview";

const DetailComponent = ({ productDetail }) => {
  const {
    name,
    price,
    rating,
    reviews,
    stock,
    categories,
    description,
    imageUrl
  } = productDetail;



  return (
    <Container maxWidth="xl">
      <div className={styles.carouselContainer}>
        <div className={styles.ImageSliderContainer}>
          <Carousel images={imageUrl} />
        </div>
        <div className={styles.attributes}>
          <h2>{name}</h2>
          <div className={styles.detailsData}>
            <HalfRatingPreview rValue={rating} />
            <p className={styles.price}>{numberFormat(price)}</p>
            <span className={styles.stock}>En stock: {stock}</span>
            <span className={styles.categories}>
              {
                categories.map((category, i) => (<p key={`${category}${i}`} >{category}</p>))
              }
            </span>

            <span className={styles.description}>{description}</span>
          </div>

        </div>
      </div>
      <div className={styles.reviewsContainer}>
        {
          reviews[0].user === "" ? <NoReview /> :
            reviews.map(({ user, review, data, rating }) => (
              <div key={user}>
                <p>{user}</p>
                <p>{review}</p>
                <p>{data}</p>
                <p>{rating}</p>
              </div>))
        }
      </div>
    </Container>
  )
}

export default DetailComponent
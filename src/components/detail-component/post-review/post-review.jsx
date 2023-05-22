import { Stack, TextField } from "@mui/material"
import styles from "./post-review.module.css"
import { useForm } from "react-hook-form"
import { useState } from "react"
import SetRatingComponent from "../../card/rating/rating"
import { useEffect } from "react"
import { setReview, updateReview } from "../../../utils/firebase/firebaseClient"
import Swal from "sweetalert2"
const PostReview = ({ userData, uid, allReviews }) => {

  const [reviewValue, setReviewValue] = useState(0);
  const reviewForm = useForm({
    defaultValues: {
      review: ""
    }
  });
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = reviewForm;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ review: "" });
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = async ({ review }) => {
    const reviews = {
      date: new Date(),
      rating: reviewValue,
      review,
      user: userData.displayName
    }
    const response = allReviews.find(review => review.user === userData.displayName);

    if (!response) {
      Swal.fire('Gracias', 'Tus comentarios nos ayudan a mejorar', 'success')
      setReview(reviews, uid)
      await upDateProductRaiting(reviews.rating);
      return;
    }
    Swal.fire('un error a corruido', 'error')
  }

  const upDateProductRaiting = async (rating) => {
    if (!allReviews.length) {
      try {
        console.log("aqui")
        await updateReview(rating, uid)
      } catch (error) {
        console.error(error)
      }
      return
    } else {
      const numberOfReviews = allReviews.length + 1
      const subTotalRating = allReviews.reduce((acc, currentReview) => acc + currentReview.rating, 0) + rating

      const totalRating = subTotalRating / numberOfReviews
      const newRating = Number(totalRating.toFixed(1))
      await updateReview(newRating, uid);
    }

  }


  return (
    <div className={styles.postReviewContainer}>
      <h3>Ingrese su reseña</h3>
      <form className={styles.postReviewForm} onSubmit={handleSubmit(onSubmit)} noValidate id="postReviewForm">
        <Stack spacing={2}>
          <TextField
            label="Reseña"
            type="text"
            autoComplete=""
            required
            {...register("review", { required: "Ingrese una reseña", minLength: 10, maxLength: 60 })}
            error={!!errors.review}
            helperText={errors.review?.message}
          />
        </Stack>
        <SetRatingComponent rValue={reviewValue} sValue={setReviewValue} />
      </form>
      <section className={styles.btnReview}>
        <button form="postReviewForm" type="submit"  >Enviar</button>
      </section>
    </div>
  )
}

export default PostReview

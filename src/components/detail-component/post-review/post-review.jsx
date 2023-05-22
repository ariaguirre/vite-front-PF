import { Stack, TextField } from "@mui/material"
import styles from "./post-review.module.css"
import { useForm } from "react-hook-form"
import { useState } from "react"
import SetRatingComponent from "../../card/rating/rating"
import { useEffect } from "react"
import { setReview } from "../../../utils/firebase/firebaseClient"
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

  const onSubmit = ({ review }) => {
    const reviews = {
      date: new Date(),
      rating: reviewValue,
      review,
      user: userData.displayName
    }
    const response = allReviews.find(review => review.user === userData.displayName);

    if (!response) {
      setReview(reviews, uid)
      Swal.fire('Solo una reseña por usuario', 'Gracias, tus comentarios nos ayudan a mejorar', 'error')
    }
    Swal.fire('Gracias!', 'tus comentarios nos ayudan a mejorar')
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

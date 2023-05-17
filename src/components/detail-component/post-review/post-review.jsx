import { Stack, TextField } from "@mui/material"
import styles from "./post-review.module.css"
import { useForm } from "react-hook-form"
import { useState } from "react"
import SetRatingComponent from "../../card/rating/rating"
import { useEffect } from "react"

const PostReview = ({userData}) => {  
  
  const [reviewValue, setReviewValue] = useState(0);
  const reviewForm = useForm({
    defaultValues:{
      review: ""
    }
  });

  const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful} } = reviewForm;

  
  useEffect(()=>{
    if(isSubmitSuccessful)
    {      
      reset({review:""});
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data)=> {
    console.log(data)
    console.log(reviewValue)
    console.log(Date())
    console.log(userData.displayName)

  }



  return (
    <div className={styles.postReviewContainer}>
      <form className={styles.postReviewForm} onSubmit={handleSubmit(onSubmit)} noValidate id="postReviewForm">  
        <Stack spacing={2}> 
          <TextField
            label="Ingrese su reseña"                    
            type="text"
            autoComplete=""
            required            
            { ...register("review", {required: "Ingrese una reseña", minLength: 10, maxLength:60})}
            error={!!errors.review}
            helperText={errors.review?.message}
          />          
        </Stack>
        <SetRatingComponent rValue={reviewValue} sValue={setReviewValue} />
      </form>

      <button form="postReviewForm" type="submit">Enviar</button>
    </div>
  )
}

export default PostReview

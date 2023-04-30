import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({rValue, sValue}) {
  
  
  const handleChange = (_, newValue)=> {
  sValue(newValue);
  }

  return (
    <Stack spacing={1}>
      <Rating 
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}   
        value={rValue}
        onChange={handleChange}    
      />
    </Stack>
  );
}
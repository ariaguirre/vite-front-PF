import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const  HalfRatingPreview = ({ rValue}) => {
  return (
    <Stack spacing={1}>
      <Rating 
        name="read-only"        
        value={rValue} 
        readOnly     
      />
    </Stack>
  );
}

export default HalfRatingPreview;
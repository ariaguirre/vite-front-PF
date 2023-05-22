import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HalfRatingPreview = ({ rValue }) => {
  const value = Number(rValue);

  console.log(value)


  return (
    <Stack spacing={1}>
      <Rating
        name="read-only"
        precision={0.1}
        value={value}
        readOnly
      />
    </Stack>
  );
}

export default HalfRatingPreview;
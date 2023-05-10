import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { priceRangeAtion } from '../../features/products/productSlice';
import { Stack ,Button } from '@mui/material';

function valuetext(value) {
  return `${value}$`;
}

const minDistance = 20;

export const SliderPrice = () =>{
    const dispatch = useDispatch();
  const [value2, setValue2] = useState([0, 200 ] );
const setPrices = () =>{
    dispatch(priceRangeAtion(value2))
}
const setPricesAll = () =>{
    setValue2([0,5000])
    dispatch(priceRangeAtion([0,5000]))
}
  const handleChange2 = (event, newValue, activeThumb) => {
   
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  const marks = [
    {
      value: 0,
      label: '0 $',
    },
    {
      value: 2000,
      label: '2000 $',
    },
  ];
  return (
    <Box sx={{ width: 120 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max={2000 }
        marks ={marks}
      />
          <Stack>
        <Button onClick={() =>{setPrices()}} >
            Filtrar
        </Button>
    </Stack>
    <Stack>
        <Button onClick={() =>{setPricesAll()}} >
            Quitar filtro
        </Button>
    </Stack>
    </Box>

  );
}
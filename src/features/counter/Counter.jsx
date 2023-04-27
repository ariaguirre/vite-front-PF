import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Button, Rating, TextField } from '@mui/material';


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button variant='contained' onClick={() => dispatch(increment())}>
        Increment
        </Button>        
        <span>{count}</span>
        <Button variant='contained' 
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{margin:"20px",}} />

        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </div>
    </div>
  )
}
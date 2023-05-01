import { useRef } from 'react'
import { numberFormat } from '../../../helper/numberFormat';
import Typography from '@mui/material/Typography'

const Sale = ({sale, price}) => {

  const saleRef = useRef(null);

  if(saleRef){
    saleRef.current = Number(price) - (Number(price) * (sale.discount * 0.01));
  }

  return (
    <Typography variant="h5" color="initial" sx={{userSelect:"none"}}>{`${numberFormat(saleRef.current)}`}</Typography>
  )
}

export default Sale
import React from 'react'

import { Box, Button, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Slider = () => {
const textBanner =["LA MATERNIDAD ES UN CAMINO QUE TE ENSEÑA A SER PERSEVERANTE, POSITIVA, RECURSIVA Y MAGICA", "CLARO QUE HAY DIAS O ETAPAS DIFICILES Y ESO TAMBIEN ES NORMAL"];

return (
  <>
  <Box
   sx={{
   width: "100%",
   height: 250,
   backgroundColor: 'primary.main',
  }}
  >
  <Typography  color={"secondary"} padding={1} pt={5} variant='h5'>
  {textBanner[0]} </Typography> 
  <FavoriteBorderIcon color={"secondary"}/>
  <br />
  <Typography  color={"secondary"} padding={2}  pt={5} variant='h7body1'>
  {textBanner[1]}
  </Typography>
 <Box padding={5}>
 <Button  color="secondary" ><ArrowBackIosNewIcon /></Button>
  <Button color="secondary"><ArrowForwardIosIcon /></Button>  
  </Box>
 
  <Button  color="secondary"><ArrowBackIosNewIcon /></Button>
  <Button color="secondary"><ArrowForwardIosIcon /></Button>     
  </Box> 
  </>
  )
}

export default Slider;

import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Slider = () => {
const textBanner =["LA MATERNIDAD ES UN CAMINO QUE TE ENSEÑA A SER PERSEVERANTE, POSITIVA, RECURSIVA Y MAGICA","CLARO QUE HAY DIAS O ETAPAS DIFICILES Y ESO TAMBIEN ES NORMAL", "DIOS TE ELIGIÓ PARA SER MADRE EN EL MOMENTO JUSTO", "Y TE DOTO DE TODO LO QUE NECESITAS PARA SER LA MAMÁ PERFECTA PARA TU BEBE"];

const [index, setIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % textBanner.length);     
    }, 5000);
    return () => clearInterval(interval);
 }, []);


return (
  <>
  <Box
   
   sx={{
   width: "100%",
   height: 110,
   //**CAMBIE COLOR BACKGROUND BANNER */
   //background: "#0d47a1",
   background:"#1976d2",
  
  }}
  >
  <Typography  color={"secondary"} padding={0} pt={3} variant='h6' >
  {textBanner[index]} </Typography> 
  <FavoriteBorderIcon color={"secondary"}/>
  </Box> 
  </>
  )
}

export default Slider;

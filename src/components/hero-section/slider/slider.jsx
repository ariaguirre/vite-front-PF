import React from 'react'
import styles from './slider.module.css';
import { useState, useEffect } from 'react';
// import { Box, Button, Typography } from '@mui/material'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Slide = () => {
const textBanner =["LA MATERNIDAD ES UN CAMINO QUE TE ENSEÑA A SER PERSEVERANTE, POSITIVA, RECURSIVA Y MAGICA","CLARO QUE HAY DIAS O ETAPAS DIFICILES Y ESO TAMBIEN ES NORMAL", "DIOS TE ELIGIÓ PARA SER MADRE EN EL MOMENTO JUSTO", "Y TE DOTO DE TODO LO QUE NECESITAS PARA SER LA MAMÁ PERFECTA PARA TU BEBE"];

const [index, setIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % textBanner.length);     
    }, 5000);
    return () => clearInterval(interval);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 
return (
  <div className={styles.banner}>
    <div className={styles.contenedor} >
      <div className={styles.dataBanner}>
        <h1 className={styles.titleBanner}>
          {textBanner[index]} </h1> 
        <FavoriteBorderIcon sx={{ fontSize: 60}} color={"secondary"}/>
      </div> 
    </div> 
  </div>
  )
}

export default Slide;

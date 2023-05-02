import React from 'react'
import { Box, Divider } from '@mui/material'


const Inicio = () => {
  return (
    <div>
    <Box component="main"
    sx={{ width: '50%',alignContent:"center", display: 'flex',
    justifyContent: 'center', mx:"25%", mt:"2%"}}
     textAlign={"center"}
     boxShadow={3}
     alignContent={"center"}
     bgcolor={"primary"} 
     >
    <h1>
     BIENVENIDOS AL PANEL DE ADMINISTRADOR !
    </h1>
    </Box>
   
    </div>
  )
}

export default Inicio
import React from 'react'
import { Box } from '@mui/material'

const ventasTotales = () => {
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
      VENTAS !
    </h1>
    </Box>
    </div>
  )
}

export default ventasTotales

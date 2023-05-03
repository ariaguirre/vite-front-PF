import React from 'react'
//Import Material UI
import { Box, 
          Typography } from '@mui/material'


const HomeAdmin = () => {
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
    <Typography variant="h6" color="initial" align='center'>PANEL ADMINISTRADOR</Typography>

    </Box>
   
    </div>
  )
}

export default HomeAdmin
import React from 'react'
import { Box, Typography } from '@mui/material'

const users = () => {
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
    <Typography variant="h6" color="initial" align='center'>CLIENTES</Typography>
    </Box>
    </div>
  )
}

export default users


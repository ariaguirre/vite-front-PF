import { Box,
         Typography } from '@mui/material'

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
    <Typography variant="h6" color="initial" align='center'>TUS VENTAS</Typography>
    </Box>
    </div>
  )
}

export default ventasTotales

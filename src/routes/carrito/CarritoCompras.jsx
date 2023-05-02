import { useParams } from "react-router-dom"
import { Container, Typography, Box, Stack, Grid } from "@mui/material";


export default function Carritow({match}){

  const { id } = useParams();


  const cesta = []

  return(<Box>
    <Container fixed >
      <Grid container spacing={3}>
      <Grid item sx={6} md="8">

        <Box  p={4} borderRadius={8} bgcolor={'#f4f4f4'}  mt={2} mb={2}>
          <Typography variant="h3" textAlign="center">
            Carrito de compras N°{id}
            </Typography>
            
        </Box>
      </Grid> 

      <Grid item sx={4} md="4" >
      <Box bgcolor={'#f4f4f4'}  mt={2}>
      <Typography variant="h5" textAlign="center">
          Detalle de la compra
          </Typography>


          
      </Box>
      </Grid>
      </Grid>

    </Container>
  </Box>)
}
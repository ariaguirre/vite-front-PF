import { useParams } from "react-router-dom"
import { Container, Typography, Box, Stack } from "@mui/material";


export default function Carritow({match}){

  const { id } = useParams();

  return(<div className="contenedor">
    <Container fixed >
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} justifyContent="center" sx={{px:"2rem", py:"2rem"  }}>

      <Box  p={4} borderRadius={8} bgcolor={'#f4f4f4'} mt={2} mb={2}>
        <Typography variant="h3" textAlign="center">
          Carrito de compras N°{id}
          </Typography>
      </Box>
      <Box>
      <Typography variant="h3" textAlign="center">
          Detalle de la compra
          </Typography>
      </Box>
      </Stack>

    </Container>
  </div>)
}
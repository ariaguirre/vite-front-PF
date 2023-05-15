import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from "@mui/material"
import styles from "../orders/ventasTotales.module.css"
import { getOrdersAdmin } from "../../../utils/firebase/firebaseClient"


const ventasTotales = () => {


  const allOrders = getOrdersAdmin()

  console.log(allOrders)
  return (
    <div >
    <h1 className={styles.title}>Ventas</h1>

    <div>
      <Box component="main" sx={{ width: "50%",nalignContent: "center", display: "flex",  justifyContent: "center",  mx: "25%",  mt: "2%",}} textAlign={"center"} boxShadow={3} alignContent={"center"} bgcolor={"primary"}>

        <TableContainer component={Paper} sx={{mt:"1%"}}>
          <Table sx={{minWidth:650}} size="small" aria-aria-label="a dense table">
            <TableHead bgcolor="#e3f2fd">
              <TableRow>
                <TableCell>Orden N°</TableCell>
                <TableCell  align="center">Id Orden</TableCell>
                <TableCell align="center">Cliente</TableCell>
                <TableCell  align="center">Cant. productos</TableCell>
                <TableCell  align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>


    </div>
  )
}

export default ventasTotales

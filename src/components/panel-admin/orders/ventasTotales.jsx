
import { Edit } from '@mui/icons-material';
import DeleteIcon from "@mui/icons-material/Delete";
import { Box,
         IconButton,
         Table,
         TableBody,
         TableRow,
         TableCell,
         TableContainer,
         Paper,
         Typography, 
         TableHead,
         Modal,
         Button,
         CardContent,
         Card,
   
         CardMedia,
         Grid,
         Stack} from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { getOrderByid, getUserByid } from '../../../utils/firebase/firebaseClient';

        
const ventasTotales = () => {
  const { orders } = useSelector(state => state.orders)
  const [open, setOpen] = useState(false);
  const [order , setOrder] = useState([]);
  const [listProducts , setlistProducts] = useState([])
  const [user , setUser] = useState([])

  const handleDispatch = async (id) =>{
    console.log(id);
  const {dataOrder,products} = await getOrderByid(id)

  setOrder(dataOrder);
  setlistProducts(products)
  const user = await getUserByid(dataOrder.idClient)
  setUser(user)
  setOpen(true); 
  }
  const handleCloseModal = () =>{
    setOpen(false);
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    
  };
  const orderModal = (
    <div>
      <Box sx={style}>
        <Box
          justifyContent="center"
          alignItems={"center"}
          sx={{ minHeight: "55vh" }}
        >
          <Box justifyItems={"center"}>
            <Typography variant="h6" color="initial" align="center">
              ORDEN
            </Typography>
            <Card  sx={{ display: 'flex' }}>
     
      <Box sx={{ display: 'flex',  flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1" color="text.secondary">
          Cliente : {user.displayName}
          </Typography>
       
        </CardContent>
   
      </Box>
      <Box sx={{ display: 'flex',  flexDirection: 'column'  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Fecha : 13/05/2023
          </Typography>
        </CardContent>
   
      </Box>
    </Card>
            
     {listProducts?.map(dat =>
      (  <Card  key={dat.id} sx={{ display: 'flex' ,marginBottom:"10px" }}>
            <CardMedia
        component="img"
        sx={{ width: 90 ,margin:"10px" }}
        image={dat.imageUrl[0]}
      />
      <Box sx={{ display: 'flex',  flexDirection: 'column' , marginBlockStart : "10px" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
           {dat.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          ${dat.subTotal} x {dat.quantity} u.
          </Typography>
        </CardContent>
   
      </Box>
  
    </Card>)
     ) }
     <Box>
     <Typography  margin="20px" align='end' component="div"variant="subtitle1">
          Total :$ {order.total}
      </Typography>
     <Typography margin="20px"  align='start' component="div" variant="subtitle1">
          Cliente : {user.displayName}
      </Typography>
     </Box>         
            </Box>
          </Box>
          <Button
                type="submit"
                variant="contained"
                onClick={handleCloseModal}
                fullWidth
              >
                Listo
              </Button>
        </Box>
     
    </div>
  );
  return (
    <div>
    <Box
      component="main"
      sx={{
        width: "50%",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        mx: "25%",
        mt: "2%",
      }}
      textAlign={"center"}
      boxShadow={3}
      alignContent={"center"}
      bgcolor={"primary"}
    >
      <Typography variant="h6" color="initial" align="center">
        ORDENES NUEVAS
      </Typography>
    </Box>
    <Stack  sx={{ alignItems:"center" }}>
    <TableContainer component={Paper} sx={{maxWidth: 800, mt: "1%" }}>
      <Table sx={{/*  minWidth: 650 */ }} size="small" aria-label="a dense table">
        <TableHead bgcolor="#e3f2fd">
          <TableRow>
            <TableCell align="center">ORDEN</TableCell>
            <TableCell align="center">ESTADO</TableCell>
            <TableCell align="center">CANTIDAD</TableCell>
            <TableCell align="center">TOTAL</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((row,i) => row.status !== "Terminado" ?(
            <TableRow
            key={`${row.id}+${i}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" > {row.No_order} </TableCell>
              <TableCell align="center"> {row.status} </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">${row.total}</TableCell>
              <TableCell align="center">
                <Button
                  aria-label="edit"
                  size="small"
                  onClick={() => handleDispatch(row.id)}
                >
                  Verificar
                </Button>
              </TableCell>
            </TableRow>
          ):(null))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    <Box
      component="main"
      sx={{
        width: "50%",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        mx: "25%",
        mt: "2%",
      }}
      textAlign={"center"}
      boxShadow={3}
      alignContent={"center"}
      bgcolor={"primary"}
    >
      <Typography variant="h6" color="initial" align="center">
        ORDENES FINALIZADAS
      </Typography>
    </Box>
    <Stack sx={{ alignItems:"center" }}>
    <TableContainer  component={Paper} sx={{ maxWidth: 800, mt: "1%" }}>
      <Table sx={{/*  minWidth: 650 */ }} size="small" aria-label="a dense table">
        <TableHead bgcolor="#e3f2fd">
          <TableRow>
            <TableCell align="center">ORDEN</TableCell>
            <TableCell align="center">ESTADO</TableCell>
            <TableCell align="center">TOTAL</TableCell>
            <TableCell align="center">CANTIDAD</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((row , i) => row.status === "Terminado" ?(
            <TableRow
            key={`${row.id}+${i}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell  align="center" scope="row"> {row.No_order} </TableCell>
              <TableCell align="center"> {row.status} </TableCell>
              <TableCell align="center">${row.total}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">
            
              </TableCell>
            </TableRow>
          ):(null))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    <Modal open={open} onClose={handleCloseModal}>
        {orderModal}
      </Modal>
  </div>
  )
}

export default ventasTotales

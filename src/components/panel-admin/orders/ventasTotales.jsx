import {
  Box,
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
  Stack,
  ListItem,
  List,
  useMediaQuery,
  Backdrop,
  Input,
  Tooltip,
} from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { deleteOrders, getOrderByid, getUserByid, serveOrder } from '../../../utils/firebase/firebaseClient';
import { orderOrdersHelper, searchOrderHelper } from './helper';

const VentasTotales = () => {
  const { orders } = useSelector(state => state.orders)//todas las ordenes
  const [currentOrders, setcurrentOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({}); // la orden seleccionada
  const [listProducts, setlistProducts] = useState([])// lista de productos por orden 
  //const [numberTracking , setnumberTracking] = useState('')
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
  const [user, setUser] = useState([])
  const [date, setDate] = useState([])
  const [orderType, setorderType] = useState("desc")
  
  useEffect(()=>{
    setcurrentOrders(orders)
  },[])
  const searchOrder  = (a) => {
    
    if(a.target.value){
      const currentOrders  =  searchOrderHelper(a.target.value , orders)
      setcurrentOrders(currentOrders);
    }
    else{
      setcurrentOrders(orders)
    }
  }
  const orderOrders = () =>{

 


if(orderType==="asc"){
 const ordersOrder = orderOrdersHelper(orders, "desc")
  setorderType("desc")
  setcurrentOrders(ordersOrder)
}else{
  const ordersOrder =  orderOrdersHelper(orders, "asc")
  setorderType("asc")
  setcurrentOrders(ordersOrder)
}
  }
  const handleDispatch = async (id) => {
     const { dataOrder, products } = await getOrderByid(id)//trae ordenrs
     
    getUserByid(dataOrder.clientId, dat => {
      setUser(dat.data())
    })

    await setOrder(dataOrder);
    setlistProducts(products)
    setOpen(true);
    setDate(dataOrder.date.toDate())
  }
  const handleDelete = async (orderId) =>{
deleteOrders(orderId);
  }
  const changeStatus = (value) => {
    const obj = {
      date: order.date,
      orderId: order.orderId,
      status: value,
      products: order.products,
      totalPrice: order.totalPrice,
      totalProducts: order.totalProducts,
      //  numberTracking : numberTracking
    }
    serveOrder(order, obj);
  }
  const handleCloseModal = (inf) => {
    if (inf.target.value) {
      setOpen(false);
      changeStatus(inf.target.value);
    } else {
      setOpen(false);
    }

  }
  const style = {
    position: "absolute",
    top: isSmallScreen ? "5%" : "50%",
    left: "50%",
    transform: isSmallScreen ? "translate(-50%, 0)" : "translate(-50%, -50%)",
    width: isSmallScreen ? "95%" : "75%",
    overflow: isSmallScreen ? 'scroll' : 'visible',
    maxHeight: isSmallScreen ? '90%' : 'none',
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
   };

  const orderModal = (
    <Box sx={style}>
      <Box
        justifyContent="center"
        alignItems={"center"}
        sx={{ minHeight: "55vh" }}>
        <Box justifyItems={"center"}>
          <Typography variant="h6" color="initial" align="center">
            ORDEN
          </Typography>
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                  Cliente : {user.displayName}
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                  Fecha : {date?.toLocaleString('es-co')}
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <List sx={{

            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,

          }}>
            {listProducts?.map((dat, i) =>
            (
              <ListItem key={`${dat.orderId}+${i}`} sx={{ display: 'flex', width: "100%" }} >
                <Card sx={{ display: 'flex', marginBottom: "10px", width: "100%" }} >
                  <CardMedia
                    component="img"
                    sx={{ width: 90, margin: "10px" }}
                    image={dat.imageUrl?dat.imageUrl : dat.imageUrl[0]}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', marginBlockStart: "10px" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6">
                        {dat.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        ${dat.price} x {dat.quantity} u.
                      </Typography>
                    </CardContent>

                  </Box>

                </Card>
              </ListItem>
            )
            )}
          </List>
          <Typography margin="10px" align='right' component="div" variant="subtitle1">
            Total :$ {order.totalPrice}
          </Typography>


          <Typography margin="10px" align='left' component="div" variant="h5">
            Datos de envio
          </Typography>

          <Typography margin="10px" align='left' component="div" variant="subtitle1">
            Direccion : {user.userData?.streetA}
          </Typography>
          <Typography margin="10px" align='left' component="div" variant="subtitle1">
            Ciudad : {user.userData?.country}
          </Typography>
          <Typography margin="10px" align='left' component="div" variant="subtitle1">
            Codigo postal : {user.userData?.ZIPcode}
          </Typography>
          <Typography margin="10px" align='left' component="div" variant="subtitle1">
            Telefono : {user.userData?.phone}
          </Typography>

        </Box>
      </Box>
      <Stack spacing={2} direction="row" justifyContent="right" >
        {order.status === "Pendiente" && <Button
          type="submit"
          variant="contained"
          onClick={handleCloseModal}
          value="Preparando"
        >
          Preparar
        </Button>}
        {order.status === "Preparando" && <Button
          type="submit"
          variant="contained"
          onClick={handleCloseModal}
          value="Enviado"
        >
          Enviar
        </Button>}
        {order.status === "Enviado" && <Button
          type="submit"
          variant="contained"
          onClick={handleCloseModal}
          value="Terminado"
        >
          Terminar
        </Button>}
        <Button
          align="center"
          type="submit"
          variant="contained"
          onClick={handleCloseModal}
          value=""
        >


          Cerrar
        </Button>
      </Stack>
    </Box>
  );
  return (
    <div>
 
    <Typography variant="h6" color="initial" align="center">
          ORDENES NUEVAS
        </Typography>
  
      <Stack sx={{ alignItems: "center", margin:5 }}>
      <Input color="primary" placeholder="Buscar orden" size="md" variant="plain" onChange={()=>searchOrder(event)} />
      </Stack >
        <TableContainer component={Paper} sx={{  mt: "1%",  minWidth: isSmallScreen ? '100%' : '600px', }}>
          <Table sx={{minWidth: isSmallScreen ? '100%' : '600px' }} size="small" aria-label="a dense table">
            <TableHead bgcolor="#e3f2fd">
              <TableRow>
                <TableCell align="center">ORDEN</TableCell>
                {!isSmallScreen && (<Tooltip title="Ordenar por fecha">
                 <TableCell  align="center" ><Button variant="text" color='inherit' onClick={() => orderOrders() }  >
                    Fecha {orderType =="asc"?(<ExpandLessIcon fontSize="small"></ExpandLessIcon>):(<ExpandMoreIcon fontSize="small"></ExpandMoreIcon>)} </Button>
                    </TableCell>
                </Tooltip>  )}
                <TableCell align="center">ESTADO</TableCell>
                
                 {!isSmallScreen && (
                <TableCell align="center">CANTIDAD</TableCell>
                )}
                
                {!isSmallScreen && (
                <TableCell align="center">TOTAL</TableCell>  
                )}
            
                <TableCell align="center"></TableCell>  
           
              </TableRow>
            </TableHead>
            <TableBody>
              {currentOrders?.map((row, i) => row.status !== "Terminado" ? (
                <TableRow
                  key={`${row.orderId}+${i}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" > {row.orderId.substr(0, 13)} </TableCell>
                  {!isSmallScreen && (
                  <TableCell align="center" > {row.date.toDate().toLocaleString('es-co')} </TableCell>
                  )}
               
                  <TableCell align="center"> {row.status} </TableCell>
                  
                   {!isSmallScreen && (
                  <TableCell align="center">{row.totalProducts}</TableCell>
                   )}
                  {!isSmallScreen && (
                  <TableCell align="center">${row.totalPrice}</TableCell>
                  )}
                  <TableCell align="center">
                    <Button
                      aria-label="edit"
                      size="small"
                      onClick={() => handleDispatch(row.orderId)}
                    >
                    {isSmallScreen? 'Ver' : 'Verificar'}
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (null))}
            </TableBody>
          </Table>
        </TableContainer>
   
    <Typography variant="h6" color="initial" align="center">
          ORDENES FINALIZADAS
        </Typography>
    <TableContainer component={Paper} sx={{ mt: "1%",  minWidth: isSmallScreen ? '100%' : '600px' }}>
          <Table   sx={{minWidth: isSmallScreen ? '100%' : '600px' }} size="small" aria-label="a dense table">
            <TableHead bgcolor="#e3f2fd">
              <TableRow>
                <TableCell align="center">ORDEN</TableCell>
                {!isSmallScreen && (
                <TableCell align="center">FECHA</TableCell>
                )}
                <TableCell align="center">ESTADO</TableCell>
                {!isSmallScreen && (
                <TableCell align="center">CANTIDAD</TableCell>
                )}
                {!isSmallScreen && (
                <TableCell align="center">TOTAL</TableCell>
                )}
             
                <TableCell align="center"></TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {currentOrders?.map((row, i) => row.status === "Terminado" ? (
                <TableRow
                  key={`${row.id}+${i}`}
                 
                >
                  <TableCell align="center"> {row.orderId.substr(0, 13)} </TableCell>

              
                  {!isSmallScreen && (

                  <TableCell align="center" > {row.date.toDate().toLocaleString('es-co')} </TableCell>
                  )}
              
                  <TableCell align="center"> {row.status} </TableCell>
                
                  {!isSmallScreen && (
                  <TableCell align="center">{row.totalProducts}</TableCell>
                  )}
                  {!isSmallScreen && (
                  <TableCell align="center">${row.totalPrice}</TableCell>
                  )}
                  <TableCell align="center">
                    <Button
                      aria-label="edit"
                      size="small"
                      onClick={() => handleDelete(row.orderId)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (null))}
            </TableBody>
          </Table>
        </TableContainer>
   
      <Modal

        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        open={open} >
        {orderModal}
      </Modal>
    </div>
  )
}

export default VentasTotales;

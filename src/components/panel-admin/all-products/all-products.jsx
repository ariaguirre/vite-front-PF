//import React y Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import { getProducts, 
        deleteProductsAdmin } from '../../../utils/firebase/firebaseClient'
import { getProductsActions } from '../../../features/products/productSlice'


//import Material UI
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography
} from '@mui/material'


const AllProducts = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const [reload, setReload] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts()
      dispatch(getProductsActions(result))
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload])

 const handleDelete = async (id, name) =>{  
 if( window.confirm("Estas Seguro de Eliminar el Producto: " + name)){
   try {
   await deleteProductsAdmin(id);
   alert('Se elimino correctamente')
   setReload(!reload); 

  } catch (error){
    alert('Upss algo falló','error:',error)
  }  
 }
}


return (
  <div>
  <Box component="main"
    sx={{
    width: '50%', alignContent: "center", display: 'flex',
    justifyContent: 'center', mx: "25%", mt: "2%"
    }}
    textAlign={"center"}
    boxShadow={3}
    alignContent={"center"}
    bgcolor={"primary"}
    >
  <Typography variant="h6" color="initial" align='center'>LISTA DE PRODUCTOS</Typography>
  </Box>
  <TableContainer component={Paper} sx={{ mt: "1%" }}>
  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead bgcolor='#e3f2fd'>
  <TableRow>
  <TableCell>PRODUCTO</TableCell>
  <TableCell align="center">IMAGEN</TableCell>
  <TableCell align="center">PRECIO</TableCell>
  <TableCell align="center">STOCK</TableCell>
  <TableCell align="center"></TableCell>
  <TableCell align="center"></TableCell>
  </TableRow>
  </TableHead>
  <TableBody>
    {products.map((row) => (
  <TableRow
    key={row.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
  <TableCell component="th" scope="row">{row.name}</TableCell>
  <TableCell align="center"><img height="50px" src={row.imageUrl} /></TableCell>
  <TableCell align="center">${row.price}</TableCell>
  <TableCell align="center">{row.stock}</TableCell>
  <TableCell align="center">
  <IconButton aria-label="delete" size="small">
  <Edit fontSize="inherit" color='success' />
  </IconButton>
  <IconButton aria-label="delete" size="small" onClick={() => handleDelete(row.id, row.name)}>
  <DeleteIcon fontSize="inherit" color='error' />
  </IconButton>
  </TableCell>
  </TableRow>
    ))}
  </TableBody>
  </Table>
  </TableContainer>
  </div>
)
}
export default AllProducts

 

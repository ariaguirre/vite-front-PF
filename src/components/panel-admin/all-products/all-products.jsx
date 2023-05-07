//import React y Redux
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  useState } from 'react';

// import FireBase
import { deleteProductsAdmin } from '../../../utils/firebase/firebaseClient'



//import Material UI
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

import {
  Grid,
  FormControl,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Modal,
  Button,
  TextField
} from '@mui/material'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100vh",
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const AllProducts = () => {
  //const s= styles()
  const dispatch = useDispatch();
const { products } = useSelector(state => state.products)
const [reload, setReload] = useState(false);
const[currentId, setCurrentId]= useState("");
const [open, setOpen] = useState(false);
const handleOpenModal = () => setOpen(true);
const handleCloseModal = () => setOpen(false);
  

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
const handleEdit= async(id)=>{
  setCurrentId(id);
  setOpen(true)
  console.log("editando ID:" + id)

}
//bodyModal
const bodyModal =(
<div >
 <Box sx={style}>
 <Box
 justifyContent='center'
 alignItems={'center'}
 sx={{ minHeight: '100vh' }}
 > 
 <Box  justifyItems={"center"}>
 <Typography variant="h6" color="initial" align='center'>MODIFICAR PRODUCTO</Typography>
 <Box  justifyContent={"center"}>
 <FormControl variant='standard' fullWidth align="center">
 <TextField
  label='Nombre'
            // type='text'
            // onChange={handleChange}
            // required
            // name='name'
  margin='dense'
  />   
 <TextField
  label='Descripcion'
            // type='text'
            // onChange={handleChange}
            // required
            // name='description'
  margin='dense'
  inputProps={{
    style: {height: 60},
  }}
  multiline
  rows={3}
  />   
<TextField
 label='Stock'
// type='number'
  // onChange={handleChange}
  // required
 // name='stock'
  margin='dense'
 />   
<TextField
  label='Precio'
 // type='number'
 // onChange={handleChange}
 // required
 // name='price'
margin='dense'
/> 
</FormControl>
<Button type='submit' variant='contained' onClick={handleCloseModal} fullWidth>Listo</Button>
</Box>       
</Box>
</Box>
        
</Box>
</div>

  
)



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
  <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead  bgcolor='#e3f2fd'>
  <TableRow>
  <TableCell>PRODUCTO</TableCell>
  <TableCell align="center">IMAGEN</TableCell>
  <TableCell align="center">PRECIO</TableCell>
  <TableCell align="center">STOCK</TableCell>
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
  <TableCell align="center"><img height="50px" src={row.imageUrl[0]} /></TableCell>
  <TableCell align="center">${row.price}</TableCell>
  <TableCell align="center">{row.stock}</TableCell>
  <TableCell align="center">
  
  <IconButton aria-label="edit" size="small" onClick={() =>handleEdit(row.id)}>
  <Edit fontSize="inherit" color='#283593' />
  
  </IconButton>
   <IconButton aria-label="delete" size="small" onClick={() => handleDelete(row.id, row.name)}>
  <DeleteIcon fontSize="inherit" color='error'/>
  </IconButton>
  </TableCell>
  </TableRow>
    ))}
  </TableBody>
  </Table>
  </TableContainer>
  <Modal
    open={open}
    onClose={handleCloseModal}
  >   
      {bodyModal}
  </Modal>
  </div>
)
}
export default AllProducts

 
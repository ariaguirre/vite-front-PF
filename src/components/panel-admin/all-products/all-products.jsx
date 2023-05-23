import Swal from "sweetalert2";
//import React y Redux
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./all-products.module.css";
// import FireBase
import {
  deleteProductsAdmin,
  setActiveProduct,
} from "../../../utils/firebase/firebaseClient";

//import Material UI
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

import {
 useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Container
} from "@mui/material";

const AllProducts = ({ onAddProduct, onEditProduct }) => {

const dispatch = useDispatch();
const { products } = useSelector((state) => state.products);
const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));  

//eliminar
const handleDelete = (id) => {
    Swal.fire({
      title: 'Estas seguro de Eliminar el Producto?',
      text: "No sera posible revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1ac8db',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu producto ha sido eliminado.',
          'success'
        )
    dispatch(deleteProductsAdmin(id));}
   
      
  })
};

//activar-desactivar
const handlerActive = async (idProduct, act) => {
  const data = {
      id: idProduct,
      active: act,
    };
    if (!act){
    Swal.fire({
      title: 'Desactivar el Producto?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: '#1ac8db',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveProduct(data)
      }
    })}else{
      Swal.fire({
        title: 'Activar el Producto?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#1ac8db',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          setActiveProduct(data)
        }
      })

    }    
};

return (
<div>
<Container maxWidth="ml"  sx={{mt:"2rem", mx: "1rem", minWidth:"xs"}}>
<Button type='submit' variant='contained'fullWidth onClick={onAddProduct}>Agregar Producto</Button>

<TableContainer component={Paper} sx={{ mt: "1%",  minWidth: isSmallScreen ? '100%' : '600px', }} >
<Table sx={{ minWidth: isSmallScreen ? '100%' : '600px' }} size="small" aria-label="a dense table">
<TableHead bgcolor="#e3f2fd">
<TableRow>
{!isSmallScreen && (
<TableCell>PRODUCTO</TableCell>
)}
<TableCell align="center">{isSmallScreen ? 'PROD.' : ' IMAGEN '}</TableCell>

{!isSmallScreen && (
<TableCell align="center">PRECIO</TableCell>
)}
{!isSmallScreen && (
<TableCell align="center">STOCK</TableCell>
)}
<TableCell align="center"></TableCell>
</TableRow>
</TableHead>
<TableBody>
  {products.map((row) => (
<TableRow
  key={row.id}
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
 >
  {!isSmallScreen && (
<TableCell component="th" scope="row">
  {row.name}
</TableCell>
)}
<TableCell align="center">
  <img height="50px" src={row.imageUrl[0]} />
</TableCell>

{!isSmallScreen && (
<TableCell align="center">${row.price}</TableCell>
)}
{!isSmallScreen && (
<TableCell align="center">{row.stock}</TableCell>
)}
<TableCell align="center">

  {row.active && row.stock >= 0 ? (
<IconButton                     
  onClick={() => handlerActive(row.id, false)}
  className={s.disable}
  >
  <svg
  width={18}
  height={18}
  fill="none"
  stroke="#e52e2e"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2.5}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
  <path d="M12 2v10" />
  </svg>
</IconButton>
) : (
<IconButton
  onClick={() => handlerActive(row.id, true)}
  className={s.active}
>
<svg
  width={18}
  height={18}
  fill="none"
  stroke="#2ee553"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2.5}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
<path d="M22 4 12 14.01l-3-3" />
</svg>
                    
</IconButton>
)}
<IconButton
  aria-label="edit"
  size="small"
  onClick={() => onEditProduct(row.id)}
>
<Edit fontSize="inherit" color="#283593" />
</IconButton>
<IconButton
  aria-label="delete"
  size="small"
  onClick={() => handleDelete(row.id)}
>
<DeleteIcon fontSize="inherit" color="error" />
</IconButton>
</TableCell>
</TableRow>
 ))}
</TableBody>
</Table>
</TableContainer>
</Container>
</div>
);
};

export default AllProducts;
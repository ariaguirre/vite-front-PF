import { Box, Divider, FormControl, Toolbar } from '@mui/material'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const createProduct = () => {

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    
    <Box 
      component="form"
      sx={{ flexGrow: 1, p: 3, alignContent:"center"}}
      noValidate
      autoComplete="on"
      padding="15px"
    > <h1>NUEVO PRODUCTO</h1>  
   
      <TextField id="outlined-basic" label="Nombre Producto" variant="outlined" />
      <TextField id="outlined-basic" label="url Imagen" variant="outlined" padding= "2em"/>
      <Divider />
      <h1>Categorias</h1>
      <FormControlLabel control={<Checkbox/>} label="Andaderas" />
      <FormControlLabel control={<Checkbox/>} label="Andaderas y Correpasillos" />
      <FormControlLabel control={<Checkbox/>} label="Correpasillos" />
     <br></br>
      <TextField id="outlined-basic" label="url Imagen" variant="outlined" />
      <TextField id="outlined-basic" label="Precio" variant="outlined" />
      <br></br>
      <Button type='submit' variant='contained' margin='dense' >Crear Producto</Button>
  
    </Box>

   
    

   
      
   
  );

   
  
}

export default createProduct

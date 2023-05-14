import Swal from "sweetalert2";
//import react / redux
import {useState, useEffect} from 'react';
//import firebase
import {getProductByid, updateProduct } from '../../../utils/firebase/firebaseClient';
//import material ui
import { Grid, Typography, Stack, TextField, ImageList, Button, ImageListItem, MenuItem, Divider } from '@mui/material';
import Images from  "../../images/images"



const EditProduct = ({id}) => {

  
 const [product, setProduct] = useState();

useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  getProduct(id);
}, [id])

const getProduct = async (id) => {
  try {
    const product = await getProductByid(id)
    setProduct(product[0])
  } catch (error) {
    console.error(error);
  }
}
const handleChange =  (event) => {
  const property = event.target.name;
  const value = event.target.value;
  setProduct({
      ...product,
      [property] : value
  })
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = product
  try{
      await updateProduct(data)
      Swal.fire({
        icon: 'success',
        title: 'Listo!',
        text: 'El Producto ha sido modificado correctamente',
        
      })
  } catch(error){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ocurrio un error... intentalo nuevamente',
      
    })
  }
  }



return (
<div>     
<Grid
container
justifyContent='center'
alignItems={'start'}
sx={{ minHeight: '100vh' }}
marginTop={3}
> 
<Grid justifyItems={"center"}>
  <Typography variant="h6" color="initial" align='center'>MODIFICAR PRODUCTO</Typography>
 
<Divider/>
<Grid  justifyContent={"center"} ml={8}>
      <form onSubmit={handleSubmit} noValidate>
      <h2>{product?.name}</h2>
      <TextField 
      label='Modificar Nombre...'
      type='text'
      // value={product?.name}
      onChange={handleChange}
      required
      name='name'
      margin='dense'
      fullWidth
     
    />
    <h5>{product?.description}</h5>
      <TextField
      label='Modificar Descripcion...'
      type='text'
      // value={product?.description}
      onChange={handleChange}
      required
      name='description'
      margin='dense'
      fullWidth
      inputProps={{
        style: {height: 60},
      }}
      multiline
      rows={3}
     
    />  
      <h4>Stock Actual: {product?.stock} </h4>
      <TextField
      label='Modificar Stock...'
      type='number'
      // value={product?.stock}
      onChange={handleChange}
      required
      name='stock'
      margin='dense'
      
      fullWidth
      
    />  
    <h4>${product?.price}</h4> 
      <TextField
      label='Modificar Precio...'
      type='number'
      // value={product?.price}
      onChange={handleChange}
      required
      name='price'
      margin='dense'
      fullWidth
      
    /> 
      {/* <TextField
      label='Select'
      select
      defaultValue=''
      name='category'
      onChange={handleSelect}
      
      > */}
          {/* {
            dataCategories?.categories?.map((ele, index)=> (
              <MenuItem key={index} value={ele.categories}>
                {ele.categories}
              </MenuItem>
          ))}
      </TextField>
      {product.imageUrl.length > 0 ? <ImageList sx={{ minHeight: '25vh'}} cols={3} rowHeight={164}>
          {
            product.imageUrl?.map((item, i)=>(
              <ImageListItem key={i}>
                <img
                src={`${item}?w=100&h=100&fit=crop&auto=format`}
                />
              </ImageListItem>
            ))
          }
      </ImageList> : null }
      <Images setUrlImages={setUrlImages}/> */}
      <Button type='submit' variant='contained' onClick={handleSubmit} fullWidth>Listo</Button>
    
      </form>
    </Grid>       
  </Grid>
</Grid>
</div>

 );
      

}

export default EditProduct


import { FormControl, Grid, ImageList, ImageListItem, MenuItem, TextField, Typography  } from '@mui/material';
import {useState, useEffect} from 'react';
import { postProductsAdmin, getCategories } from '../../../utils/firebase/firebaseClient';
import { getCategoriesAction } from  "../../../features/categories/categoriesSlice" 
import Images from  "../../images/images"


import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const CreateProduct = () => {

  
  const [urlImages, setUrlImages] = useState([]);
  const dispatch = useDispatch()

  const dataCategories = useSelector(state => state.categories)

  const [product, setProduct] = useState({
    name: '',
    description: '',
    stock: 0,
    price: 0,
    categories: [],
    imageUrl: [],
    reviews: [],
    rating: 0,
    sale: {}
    
    
});

  const handleChange =  (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setProduct({
        ...product,
        [property] : value
    })
}

const handleSelect =(event) => {
  setProduct({
      ...product,
      categories: [{[event.target.value]: true}]
  })
}

 useEffect(() => {
  const getCat = async() => {
    const result = await getCategories()
    dispatch(getCategoriesAction(result))
  };
  getCat()
}, [])

 

useEffect(()=>{
  if(urlImages.length < 1) return;
  setProduct({
    ...product,
    imageUrl: [...product.imageUrl, urlImages]
  })
}, [urlImages])

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = product
  try{
      await postProductsAdmin(data)
        alert('Se agregó correctamente')
  } catch(error){
   alert('Upss algo falló','error:',error)
  }
}


  return (
    <div>      
      <Grid
      container
      justifyContent='center'
      alignItems={'center'}
      sx={{ minHeight: '100vh' }}
      > 
        <Grid item md={5} sm={12} justifyItems={"center"}>
        <Typography variant="h6" color="initial" align='center'>AGREGAR PRODUCTO</Typography>
          <Grid container justifyContent={"center"}>
            <FormControl variant='standard' fullWidth align="center">
            <TextField
            label='Nombre'
            type='text'
            onChange={handleChange}
            required
            name='name'
            margin='dense'
          />   
            <TextField
            label='Descripcion'
            type='text'
            onChange={handleChange}
            required
            name='description'
            margin='dense'
            inputProps={{
              style: {height: 60},
            }}
            multiline
            rows={3}
          />   
            <TextField
            label='Stock'
            type='number'
            onChange={handleChange}
            required
            name='stock'
            margin='dense'
          />   
            <TextField
            label='Precio'
            type='number'
            onChange={handleChange}
            required
            name='price'
            margin='dense'
          /> 
            <TextField
            label='Select'
            select
            defaultValue=''
            name='category'
            helperText='Selecciona una categoría'
            onChange={handleSelect}
            >
            {
              dataCategories?.categories?.map((ele, index)=> (
                <MenuItem key={index} value={ele.id}>
                  {ele.id}
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
            <Images setUrlImages={setUrlImages}/>
            <Button type='submit' variant='contained' onClick={handleSubmit} fullWidth>Listo</Button>
            </FormControl>
          </Grid>       
        </Grid>
      </Grid>
      </div>
  );
      

}

export default CreateProduct

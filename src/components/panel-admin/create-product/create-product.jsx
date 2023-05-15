import { Container, ImageList, ImageListItem, MenuItem, TextField, Typography  } from '@mui/material';
import {useState, useEffect} from 'react';
import { postProductsAdmin, getCategories } from '../../../utils/firebase/firebaseClient';
import { getCategoriesAction } from  "../../../features/categories/categoriesSlice" 
import Images from  "../../images/images"
import { useForm } from 'react-hook-form';
import styles from "../create-product/create-product.module.css";
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
    reviews: [{
      date:'',
      rating: 0,
      review:'',
      user:''
    }],
    rating: 0,
    sale: {},
    active: true
  });

  
  const productform = useForm({
      defaultValue:{
        name: '',
        description: '',
        stock: 0,
        price: 0,
        categories: [],
        imageUrl: [],
      }
    })
    
  const {register, handleSubmit, formState:{ errors }} = productform;

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
      categories: [event.target.value]
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

const onSubmit = async (e) => {
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
      
        <Container maxWidth="lg" sx={{mt:"2rem"}}>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.center} noValidate>
        <Typography variant="h6" color="initial" align='center'>AGREGAR PRODUCTO</Typography>
          <div className={styles.contenedor}>
            <TextField
            label='Nombre'
            type='text'
            onChange={handleChange}
            required
            name='name'
            margin='dense'
            {...register("name", {required: 'Ingrese el nombre del producto'})}
            error={!!errors.name}
            helperText={errors.name?.message}
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
            {...register("description", {required: 'Ingrese la descripción del producto'})}
            error={!!errors.description}
            helperText={errors.description?.message}
          />   
            <TextField
            label='Stock'
            type='number'
            onChange={handleChange}
            required
            name='stock'
            margin='dense'
            {...register("stock", {required: 'Ingrese la cantidad de producto disponible', min:1})}
            error={!!errors.stock}
            helperText={errors.stock?.message}
          />   
            <TextField
            label='Precio'
            type='number'
            onChange={handleChange}
            required
            name='price'
            margin='dense'
            {...register("price", {required:'ingrese el precio de venta del producto', min:0})}
            error={!!errors.price}
            helperText={errors.price?.message}
          /> 
            <TextField
            label='Select'
            select
            defaultValue=''
            name='category'
            onChange={handleSelect}
            {...register("categories", {required:'Seleccione una categoria'})}
            error={!!errors.categories}
            helperText={errors.categories?.message}
            >
                {
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
            <Images setUrlImages={setUrlImages}/>
            <Button type='submit' variant='contained' onClick={handleSubmit} fullWidth>Listo</Button>
            </div>
            </form>
                
        </Container>
      </div>
  );
      

}

export default CreateProduct

import { Box, Divider, FormControl, Toolbar } from '@mui/material';
import {useState, useEffect} from 'react';
import { postProductsAdmin, getCategories } from '../../utils/firebase/firebaseClient';
import { getCategoriesAction } from '../../features/categories/categoriesSlice';
import Images from '../images/images'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

const createProduct = () => {

  
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
    console.log(product.name)
  } catch(error){
    console.log('No funciona')
  }
}


  return (
    
    <form onSubmit={handleSubmit}>

            <label htmlFor="">Name </label>
            <input type="text" name="name" value={product.name} placeholder="name" onChange={handleChange}/>
            <br />
            <label htmlFor="">Description</label>
            <textarea type="text" name="description" value={product.description} placeholder="description" onChange={handleChange}></textarea>
            <br />
            <label htmlFor="">Stock</label>
            <input type="number" name="stock" value={product.stock} placeholder="stock" onChange={handleChange}/>
            <br />
            <label htmlFor="">Price</label>
            <input type="text" name="price" placeholder="price" value={product.price} onChange={handleChange} />
            <br />
            <label htmlFor="">Categories</label>
            <select onChange={handleSelect}>
                {dataCategories?.categories?.map((category, index)=> (
                    <option key={index} value={category.id}>{category.id}</option>
                ))}
            </select>
            <br />
            <label htmlFor="">Image</label>
            <Images setUrlImages={setUrlImages}/>
            <br />
            <button type="submit">Enviar</button>
           
        </form>
  );

}

export default createProduct

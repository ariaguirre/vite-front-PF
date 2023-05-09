import  {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../features/productsPagination/productsPaginationSlice';
import { setPagesActions } from '../../features/productsPagination/productsPaginationSlice';
import { slice } from './helper';
export const PaginationComponent =  () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.products)
    const { pages , productsPag ,pageSelect } = useSelector(state => state.productPag)
    const [tamañoPorpagina] =useState(8);
    useEffect(()=>{
      dispatch(setPagesActions(Math.ceil(products.length/8)))   
      set();
    },[products])

const set = async () =>{
const slicer = await slice({pageSelect, tamañoPorpagina, products})
dispatch(ProductsActions(slicer))

 }
const handelClickpage = async (event,pageSelect) =>{
  event.preventDefault()
  const slicer =  await slice({pageSelect, tamañoPorpagina, products})
  dispatch(ProductsActions(slicer))
}



///paginacion


  return (
    <Stack justifyContent={'center'} sx={{flexDirection:'row',justifyContent:'center', alignItems:'center' }}  spacing={2} >
      <Pagination  count={pages} variant="outlined" shape="rounded" onChange={handelClickpage} />
    </Stack>
  );
}
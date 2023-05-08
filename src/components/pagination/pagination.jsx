import  {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { changePag, startPagination } from '../../utils/firebase/firebaseClient';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from '../../features/productsPagination/productsPaginationSlice';
import { setPagesActions } from '../../features/productsPagination/productsPaginationSlice';

export const PaginationComponent =  () => {
    const dispatch = useDispatch();
    const products = useSelector(state => { state.productPag.products})
    const { pages } = useSelector(state => state.productPag)
    const [filterOrder] = useState(
        {
         categories : "Seguridad para Bebés",
         orderBy : "index",
         orderType : 'asc',
         name : '',
         itemsPage: 8
        }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{startedPag();},[])
const startedPag = async () =>
{

  if(!products){
    const {docs} = await startPagination(filterOrder);
    const {collectionSize} = await startPagination(filterOrder);
    dispatch(ProductsActions(docs))
    const n = Math.ceil(collectionSize/filterOrder.itemsPage)
    dispatch(setPagesActions(n)) 
    
  }
     
     
}
const handleChange = async (event,value) =>
{
    event.preventDefault()
    const {docs} = await changePag(value,filterOrder)
    const {collectionSize} = await changePag(value,filterOrder)
    dispatch(ProductsActions(docs))
    const n = Math.ceil(collectionSize/filterOrder.itemsPage)
    dispatch(setPagesActions(n)) 
}
  return (
    <Stack justifyContent={'center'} sx={{flexDirection:'row',justifyContent:'center', alignItems:'center' }}  spacing={2} >
      <Pagination  count={pages} variant="outlined" shape="rounded" onChange={handleChange} />
    </Stack>
  );
}
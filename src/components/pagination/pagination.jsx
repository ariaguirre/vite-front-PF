import  {React, useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { changePag, startPagination } from '../../utils/firebase/firebaseClient';
import { useDispatch } from 'react-redux';
import { ProductsActions } from '../../features/productsPagination/productsPaginationSlice';

export const PaginationComponent =  () => {
    const dispatch = useDispatch();
    const [itemPerPage] = useState(8)
    const [pages,setPages] = useState(0)
    const [filterOrder, setFilterOrder] = useState(
        {
         categories : "Seguridad para Bebés",
         orderBy : "index",
         orderType : 'asc',
         name : '',
         itemsPage: 8
        }
    )
    useEffect(()=>{startedPag();},[])
const startedPag = async () =>
{
        const {docs} = await startPagination(filterOrder);
        const {collectionSize} = await startPagination(filterOrder);
        dispatch(ProductsActions(docs))
        setPages(Math.ceil(collectionSize/filterOrder.itemsPage))
}
const handleChange = async (event,value) =>
{
    event.preventDefault()
    const {docs} = await changePag(value,filterOrder)
    const {collectionSize} = await changePag(value,filterOrder)
    dispatch(ProductsActions(docs))
    setPages(Math.ceil(collectionSize/filterOrder.itemsPage))
}
  return (
    <Stack justifyContent={'center'} sx={{flexDirection:'row',justifyContent:'center', alignItems:'center' }}  spacing={2} >
      <Pagination  count={pages} variant="outlined" shape="rounded" onChange={handleChange} />
    </Stack>
  );
}
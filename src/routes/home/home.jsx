import {  useMemo } from "react";
import  PrimarySearchAppBar  from "../../components/navbar/navbar"
import { useDispatch,useSelector } from "react-redux"
import { auth, getUserByid } from "../../utils/firebase/firebaseClient";
import { getUserData,userDataAuth } from "../../features/userData/userDataSlice";
import Container from '@mui/material/Container'

import Hero from "../../components/hero-section/hero"

const Home = () => {
const dispatch = useDispatch();
const dataAuth = useSelector((state) =>state.userData.dataAuth)

const user =useMemo  ( ()=>{
  if(!dataAuth.length){
    auth.onAuthStateChanged(async (user) =>{
      if(user){
        dispatch(userDataAuth(user))
        const dataUser = await  getUserByid(user.uid);
        dispatch(getUserData(dataUser))  
      }
    }) 
  }
return dataAuth
},[] )

return (

    <Container maxWidth="xl">
      <Hero/>
      <PrimarySearchAppBar/>           
    </Container>

  )
}


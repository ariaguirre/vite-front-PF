import {  useMemo } from "react";

import { useDispatch,useSelector } from "react-redux"
import { auth, getUserByid} from "../../utils/firebase/firebaseClient";
import { getUserData,userDataAuth } from "../../features/userData/userDataSlice";
import Hero  from "../../components/hero-section/hero"
import Footer from '../../components/footer/footer'

const Home = () => {
const dispatch = useDispatch();
const dataAuth = useSelector((state) =>state.userData.dataAuth)

useMemo(()=>{
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
      <Hero/>    
  )
}

export default Home;
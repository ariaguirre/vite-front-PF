

import { useMemo } from "react";
import  PrimarySearchAppBar  from "../../components/navbar/navbar"

import { useDispatch,useSelector } from "react-redux"
import { getUserByid } from "../../utils/firebase/firebaseClient";
import { getUserData } from "../../features/userData/userDataSlice";
const Home = () => {
const dispatch = useDispatch();
const userCredentials = useSelector((state) =>state.credentials.userState.userCredentials)
const dataUser = useSelector((state) =>state.userData.userData)

const datosUser = useMemo( async() =>{
  if(userCredentials){
    const dataUser = await  getUserByid(userCredentials);
    dispatch(getUserData(dataUser))  
  }
return dataUser;
},[])




  return (
    <div>
      <PrimarySearchAppBar/>
      Home   

    </div>
  )
}

export default Home

import { useEffect } from "react"
import { getLocalStorage,userPersist } from "../../utils/firebase/firebaseClient"

const Home = () => {
  let user;
  useEffect( ()=>{
    const ls = async () =>{
      user = await getLocalStorage();
    let credentials =  userPersist(user[0].email,user[0].password)
    console.log(credentials)
    }
 ls();
  },[])
 
  return (
    <div>
      Home   

    </div>
  )
}

export default Home

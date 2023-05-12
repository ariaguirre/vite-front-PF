import { Link } from "react-router-dom";
import { signOutUser } from "../../../utils/firebase/firebaseClient";
import { clearCart } from "../../../features/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { clearUserData } from "../../../features/userData/userDataSlice";

const LinksNavbar = () =>  {
  const dispatch = useDispatch();


  const handleSignOut = () =>  {
    //Se deslogea de todo 
    signOutUser();
    //Se elimina la informacion del persist
    dispatch(clearCart());
    dispatch(clearUserData());
  }


  return(
  <>
     <li><Link to="/admin">Perfil</Link></li>
     <li onClick={ handleSignOut }><Link>Salir</Link></li>
  </>)
}
export default LinksNavbar;
import { setPropsUser } from "../utils/firebase/firebaseClient";

// función para setear propiedades o actualizar el contenido de una propieda existente del usuario logueado
// recibe el nombre de la propiedad, el contenido que se quiera setear en el usuario y el uid del usuario logueado
const setDataUser = async (propiedad, contenido, uid) => {
  const prop = {
    [propiedad]: contenido,
  };
  try {
    await setPropsUser(prop, uid);
  } catch (error) {
    alert("Ups, algo falló", error);
  }
};

export default setDataUser;

//para utilizarlo en cualquier componente se recomienda hacer traer el uid del userCredential con "useSelector"
//ocupar la funcion async setDataUser pasando las propiedades correspondientes
// y por último hacer un dispatch del usuario usando el motodo de firebase para traer por id y despacharlo al estado userData de redux

//ejemplo

// const { uid } = useSelector(s => s.currentUser.userCredentials)
// const dispatch = useDispatch()

// const handlerAdmin = async (propiedad, contenido) =>{
//  await setDataUser(propiedad, contenido, uid)
//  dispatch(getUserData(await getUserByid(uid)))
// }

{
  /* <Button onClick={() => handlerAdmin('admin', true)}> TRUE</Button>
    <Button onClick={() => handlerAdmin('admin', false)}> FALSE</Button> */
}

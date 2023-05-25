import { useSelector } from "react-redux";
import styles from "./user-profile.module.css";
import Typography from '@mui/material/Typography'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import setDataUser from "../../helper/setDataUser";
import noPic from "../../utils/img/noPic.jpg";

const UserProfile = () => {

  const navigate = useNavigate();
  const data = useSelector((state) => state.currentUser.userCredentials);
  const userData = useSelector((state) => state.persistedReducer.userData.userData)


  const handlePorfileClick = () => {
    Swal.fire({
      title: 'Eliminaras tu cuenta',
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "Cancelar",
      confirmButtonColor: "#1ac8db"
    }).then(result => {
      if (result.isConfirmed) {
        deleteUser();
      }
    })
  }

  const deleteUser = async () => {
    Swal.fire('Eliminado', '', 'success')
    try {
      setDataUser("active", false, data.uid);
      navigate("/auth");
    } catch (error) {
      Swal.fire('Error', 'Ocurrio un error en la eliminacion', 'error')
    }
  }

  console.log()


  return (
    <main className={styles.userProfileContainer}>
      <Typography variant="h3" color="primary">Perfil</Typography>
      <section className={styles.userDataContainer}>
        <section className={styles.userData}>
          <div>
            <img src={data?.photoURL || noPic} alt="Imagen de perfil de usuario" />
          </div>
          <div className={styles.userDataInf}>
            <span>{userData?.displayName || "NN"}</span>
            <span>{data?.email}</span>
            <span>Estado de la cuenta: {userData?.active ? "activa" : "eliminada"}</span>
            <span>Total de ordenes: {userData?.onlinePurchases?.length}</span>
          </div>
        </section>
        <button onClick={handlePorfileClick}>Eliminá mi cuenta</button>
      </section>

    </main>
  )
}

export default UserProfile
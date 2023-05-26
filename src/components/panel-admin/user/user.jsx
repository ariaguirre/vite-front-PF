import styles from "./user.module.css";
import { useSelector } from "react-redux";

import Typography from '@mui/material/Typography'

const User = () => {
  const data = useSelector((state) => state.currentUser.userCredentials);

  const img = data?.photoURL;
  return (
    <div className={styles.perfilContainer}>
      <div className={styles.container}>
        <Typography variant="h3" color="primary">Perfil</Typography>
        <div>
          <div className={styles.margin}>
            {(img && (
              <img src={img} alt="User" className={styles.imgUsuario} />
            )) || (
                <img
                  src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                  className={styles.imgUsuario}
                  alt="usr"
                  width={"150vw"}
                />
              )}
          </div>
          <div className={styles.infUsrBase}>
            <h3>Datos</h3>
          </div>
          <div className={styles.containerData}>
            <div className={styles.name}>
              <p>{data?.displayName}</p>
            </div>
            <div className={styles.email}>
              <p>{data?.email}</p>
            </div>
          </div>
          <div className={styles.boton}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

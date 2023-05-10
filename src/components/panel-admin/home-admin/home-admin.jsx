import { Style } from "@mui/icons-material"
import styles from "../home-admin/home-admin.module.css"
//Import Material UI
// import { Box, Typography } from '@mui/material';


const HomeAdmin = () => {
  return (
    <div>
    {/* <Box component="main"
    sx={{ width: '50%',alignContent:"center", display: 'flex',
    justifyContent: 'center', mx:"25%", mt:"2%"}}
     textAlign={"center"}
     boxShadow={3}
     alignContent={"center"}
     bgcolor={"primary"} 
     >
    <Typography variant="h6" color="initial" align='center'>PANEL ADMINISTRADOR</Typography>

    </Box> */}

    <h1>Panel Principal</h1>
    <div className={styles.container}>
      <p className={styles.item}>Ordenes</p>
      <div className={styles.flex}>
        <div className={styles.areaPanel}>
          <p className={styles.title}>Hoy</p>
          <p className={styles.value}>2</p>
          <p className={styles.vExtra}>Ordenes del día</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Esta semana</p>
          <p className={styles.value}>25</p>
          <p className={styles.vExtra}>Ordenes esta semana</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Este mes</p>
          <p className={styles.value}>32</p>
          <p className={styles.vExtra}>Ordenes en el mes</p>
        </div>
      </div>

      <p className={styles.item}>Ingresos</p>
      <div className={styles.flex}>
        <div className={styles.areaPanel}>
          <p className={styles.title}>Hoy</p>
          <p className={styles.value}>2</p>
          <p className={styles.vExtra}>Ordenes del día</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Esta semana</p>
          <p className={styles.value}>25</p>
          <p className={styles.vExtra}>Ordenes esta semana</p>
        </div>

        <div className={styles.areaPanel}>
          <p className={styles.title}>Este mes</p>
          <p className={styles.value}>32</p>
          <p className={styles.vExtra}>Ordenes en el mes</p>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default HomeAdmin
//import React
import React from 'react'
import { useEffect, useState } from 'react';
//import Material UI y css module
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@mui/material'
import styles from "../users/users.module.css"
//Import firebase
import { getUserAdmin, setActiveUser } from '../../../utils/firebase/firebaseClient';
//import alertas
import Swal from "sweetalert2";



const Users = () => {
 
  const [userData, setUserData] = useState([]);
   // update para user data y actualizar tabla al activar/desactivar user
  const updateUserData = (idUser, act) => {   
    const updatedUserData = userData.map((user) => {
      if (user?.id === idUser) {
        return { ...user, active: act };
      }
      return user;
    });
    setUserData(updatedUserData);
  };


useEffect(() => {    
  const resultData = async () => {
  const users = await getUserAdmin();
  setUserData(users);
    }
  resultData();
  }, []);
 const usersList = userData.filter((user)=>!user.admin)
 //console.log(usersList)

//activar-desactivar
const handlerActive = async (idUser, act) => {
  const data = {
    id: idUser,
    active: act,
  };
  if (!act){
  Swal.fire({
    title: 'Estas Seguro?',
    text: "Esto desactivara al usuario y no tendra acceso a la pagina!",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: '#1ac8db',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      setActiveUser(data)
      updateUserData(idUser, act);
    }
  })}else{
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Esto Activara nuevamente al usuario!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: '#1ac8db',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        setActiveUser(data)
        updateUserData(idUser, act);
      }
    })

  }    
};


return (
<div>
<TableContainer component={Paper} sx={{ mt: "1%",  minWidth: "600x" }} >CLIENTES
<Table sx={{ minWidth: "600x"}} size="small" aria-label="a dense table" >
<TableHead bgcolor="#e3f2fd">
<TableRow>
<TableCell align="left">NOMBRE USUARIO</TableCell>
<TableCell align="left">E-MAIL</TableCell>
<TableCell align="left">TELEFONO</TableCell>
<TableCell align="left">DIRECCION</TableCell>
<TableCell align="left"></TableCell>
</TableRow>
</TableHead>
<TableBody>
  {usersList.map((row) => (
<TableRow
  key={row.id}
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
 >
<TableCell component="th" scope="row">
  {row.displayName}
</TableCell>
<TableCell component="th" scope="row">
  {row.email}
</TableCell>
<TableCell component="th" scope="row">
  {row.userData?.phoneN}
</TableCell>
<TableCell component="th" scope="row">
  {row.userData?.adress}{"-"}{row.userData?.city}
</TableCell>
<TableCell align="center">
  {row.active ? (
<IconButton                     
  onClick={() => handlerActive(row.id, false)}
  className={styles.disable}
  >
  <svg
  width={18}
  height={18}
  fill="none"
  stroke="#e52e2e"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2.5}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
  <path d="M12 2v10" />
  </svg>
</IconButton>
) : (
<IconButton
  onClick={() => handlerActive(row.id, true)}
  className={styles.active}
>
<svg
  width={18}
  height={18}
  fill="none"
  stroke="#2ee553"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2.5}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
<path d="M22 4 12 14.01l-3-3" />
</svg>
                    
</IconButton>
)}
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
</div>
  )
}

export default Users


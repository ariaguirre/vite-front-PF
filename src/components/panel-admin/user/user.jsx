import { useEffect } from 'react';
import styles from './user.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../../features/userData/userDataSlice';
import { Button, Stack } from '@mui/material';
import { getUserAdmin } from '../../../utils/firebase/firebaseClient';


const User = () =>{
    const dispatch = useDispatch();
    const data = useSelector((state) =>state.currentUser.userCredentials);


    useEffect(()=>{
        dispatch(getUserData(getUserAdmin()))
    },[])

    // console.log(data)

    const img = data.reloadUserInfo.photoUrl;

    return(<div className={styles.perfil} >
        <h1>Mi perfil</h1>
        <div >

            <div className={styles.margin}>{
                img === undefined ? <img src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' className={styles.imgUsuario} alt="usr"/> : <img src={img} alt="User" className={styles.imgUsuario} />                
            }</div>



            <div className={styles.infUsrBase} >
                <h3>Información básica</h3>
                <div className={styles.infoUsuario}>
                    <p><span>Nombre:</span>{data.displayName} </p>
                    <p><span>Email:</span>{data.email} </p>
                </div>
                <Stack  alignItems='center' py={2}>
                <Button variant='contained' size='large' className={styles.btn} >Desactivar cuenta</Button>
            </Stack>
            </div>

        </div>
    </div>)
} 


export default User;


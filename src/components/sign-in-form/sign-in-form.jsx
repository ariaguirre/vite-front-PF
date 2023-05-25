//Material UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//Firebase
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  getUserAdmin,
  signOutUser
} from '../../utils/firebase/firebaseClient';
//EmailJS
import emailjs from "emailjs-com"
const USER_ID="service_8duinll"
const API_KEY="lp4j5eTKXZNYsZ4jM"
const TEMPLATE_ID="template_cvqj07q"
import { clearUserData } from '../../features/userData/userDataSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
//Forms
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const SignInForm = () => {

  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const { register, handleSubmit, formState: { errors } } = form;
  const navigate = useNavigate();
  //obtengo los datos del usuario 
  const getUser = async (id) => {
    const users = await getUserAdmin()
    const userId = users.filter((user) => user.id === id)
    
    return userId
  }
  //compruebo si esta activo o no para perimitir el logueo o restringir el acceso
  const isActive = async (userId) => {
    const userData = await getUser(userId)
    
    if (userData && userData[0] && userData[0].active){
      navigate("/")
    }
    else { 
      await signOutUser();
      dispatch(clearUserData())
      //alerta
      Swal.fire({
        icon: 'error',
        title: 'Disculpa, pero ya no tienes acceso!',
        text: 'Tu cuenta ha sido bloqueada',
      })
      navigate("/")
    }
  }

const signInWithGoogle = async () => {
    try {
      const result = await signInWithGooglePopup();
     
      const isNewUser = result.user.metadata.creationTime === result.user.metadata.lastSignInTime
      if (isNewUser) {      
    //enviar email de registro
      emailjs.send(USER_ID, TEMPLATE_ID, {
      email: result.user.email,
      displayName: result.user.displayName
    }, API_KEY)
    } 
    const userId = result.user.uid      
    isActive(userId)
    } catch (error) {
    console.log(error.code)
    }
  };

  const onSubmitEmailAndPassword = async ({ email, password }) => {

    try {
      const result = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userId = result.user.uid
      isActive(userId)

    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
       
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'usuario y/o contraseña incorrectos!'                  
          })
      break;
      case 'auth/user-not-found':
        Swal.fire({
        icon: 'error',
        title: 'Usuario y/o Contraseña Incorrecta!',                  
         })
      break;
      default:
        Swal.fire({
        icon: 'error',
        title: 'Inicio de Sesión de usuario Fallido',                  
        })
    }
   }
  }
  return (
    <Grid item md={8} xs={10}>
      <Typography variant="h4" color="initial" align='center'>
        ¿Ya tienes una cuenta?
      </Typography>
      <Typography variant='body1' color="initial" align='center' marginBottom={4}>
        Inicia sesión con tu correo electrónico y contraseña
      </Typography>

      <form onSubmit={handleSubmit(onSubmitEmailAndPassword)} noValidate>
        <Stack spacing={2}>
          <TextField
            label='Correo electrónico'
            type='email'
            autoComplete=""
            required

            {...register("email", { required: "Por favor, ingrese una dirección de correo electrónico" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label='Contraseña'
            type='password'
            autoComplete=""
            required
            {...register("password", { required: "Por favor, ingrese una contraseña" })}
            error={!!errors.password}
            helperText={errors.password?.message}

          />
          <Stack direction={"row"} spacing={2} >
            <Button type='submit' variant='contained' fullWidth>
              Ingresar
            </Button>
            <Button variant='contained' fullWidth onClick={signInWithGoogle}>
              Con Google
            </Button>
          </Stack>

        </Stack>
      </form>
      <Grid container justifyContent={'center'} marginTop={2}>
        <Link to={'/sign-up'}> ¿No tienes cuenta? Registrarse <span style={{ color: "#1ac8db" }}>aquí</span> </Link>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
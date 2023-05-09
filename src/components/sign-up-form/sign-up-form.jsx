//Material UI 
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
//Firebase 
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebaseClient';
import { Stack } from '@mui/material';
//Form 
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const SignUpForm = () => {

  const form = useForm({
    defaultValues:{
      email:"",
      password:"",
      repeatPassword:"",
      displayName:""
    }
  });

  const { register, handleSubmit, formState: {errors} } = form;
  const navigate = useNavigate()
  const onSubmitRegistration = async ({displayName, email, password, repeatPassword})=> {
    if (password !== repeatPassword) {
          alert('Las contraseñas no coinciden');
          return;
        }
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
          );
          await createUserDocumentFromAuth(user, { displayName }); 
          alert('Registrado exitosamente') 
          navigate('/auth')
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('El correo electrónico ya está registrado en el sistema');
          } else {
            console.error('Ha ocurrido un error al intentar crear el usuario', error);
          }
        }
  }

  return (
    <Grid item md={6} xs={12}>
      <Typography variant="h4" color="initial" align='center'>¿No estás registrado?</Typography>
      <Typography variant="body1" align='center' marginBottom={1}>Crea una cuenta con tu correo electrónico y contraseña</Typography>

      <form onSubmit={handleSubmit(onSubmitRegistration)} noValidate>
        <Stack spacing={2}>
          <TextField
            label='Nombre'
            type='text'
            required                   
            {...register('displayName', { required:"Por favor, ingrese un nombre de usuario"})}
            error={!!errors.displayName}
            helperText={errors.displayName?.message}
            autoComplete=""
          />

          <TextField
            label='Correo electrónico'
            type='email'
            required            
            {...register('email', { required:"El correo electrónico es obligatorio"})}
            error={!!errors.email}
            helperText={errors.email?.message}        
            autoComplete=""
          />

          <TextField
            label='Contraseña'
            type='password'
            required            
            {...register('password', { required:"La contraseña es obligatoria"})}
            error={!!errors.password}
            helperText={errors.password?.message}             
            autoComplete=""
          />

          <TextField
            label='Confirmar contraseña'
            type='password'
            required
            {...register('repeatPassword', { required:"La confirmación de contraseña es obligatoria"})}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
            autoComplete=""
          />
          <Button type='submit' variant='contained'>Registrarse</Button>
        </Stack>
      </form>
      <Grid container justifyContent={'center'} marginTop={2}>
        <Link to={'/auth'}> ¿Ya estas registrado? Ingresar aquí</Link>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
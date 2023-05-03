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

  // const handleSubmit = async () => {
  //   
  // };

  const onSubmitRegistration = async ({displayName, email, password, repeatPassword})=> {
    if (password !== repeatPassword) {
          alert('passwords do not match');
          return;
        }
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
          );
          await createUserDocumentFromAuth(user, { displayName });          
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.error('user creation encountered an error', error);
          }
        }
  }

  return (
    <Grid item md={6} xs={12}>
      <Typography variant="h4" color="initial" align='center'>Don&#39;t have an account?</Typography>
      <Typography variant="body1" align='center'>Sign up with your email and password</Typography>

      <form onSubmit={handleSubmit(onSubmitRegistration)} noValidate>
        <Stack spacing={2}>
          <TextField
            label='Display Name'
            type='text'
            required                   
            {...register('displayName', { required:"Display name is required"})}
            error={!!errors.displayName}
            helperText={errors.displayName?.message}
            autoComplete=""
          />

          <TextField
            label='Email'
            type='email'
            required            
            {...register('email', { required:"Email is required"})}
            error={!!errors.email}
            helperText={errors.email?.message}        
            autoComplete=""
          />

          <TextField
            label='Password'
            type='password'
            required            
            {...register('password', { required:"Password is required"})}
            error={!!errors.password}
            helperText={errors.password?.message}             
            autoComplete=""
          />

          <TextField
            label='Confirm Password'
            type='password'
            required
            {...register('repeatPassword', { required:"Confrim password is required"})}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
            autoComplete=""
          />
          <Button type='submit' variant='contained'>Sign Up</Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default SignUpForm;
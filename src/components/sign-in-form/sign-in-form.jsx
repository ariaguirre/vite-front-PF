//Material UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//Firebase
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebaseClient';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
//Forms
import { useForm } from 'react-hook-form';

const SignInForm = () => {

  const form = useForm({
    defaultValues:{
      email: "",
      password: ""  
    }  
  });

  const { register, handleSubmit, formState: {errors} } = form;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      navigate("/");
    } catch (error) {
      console.error(error)
    }
  };

  const onSubmitEmailAndPassword = async ({email,password}) => {
    
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          alert('user sign in failed', error);
      }
    }
  }
  return (
    <Grid item md={6} xs={12}>      
      <Typography variant="h4" color="initial" align='center'>
        Already have an account?
      </Typography>
      <Typography variant='body1' color="initial" align='center'>
        Sign in with your email and password
      </Typography>
      
        <form onSubmit={handleSubmit(onSubmitEmailAndPassword)} noValidate>
          <Stack spacing={2}>
            <TextField
              label='Email'
              type='email'
              autoComplete=""
              required                                       
              
              {...register("email", {required:"Email is required"})}   
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label='Password'
              type='password'
              autoComplete=""
              required                                                
              {...register("password", {required:"Password is required"})}
              error={!!errors.password}
              helperText={errors.password?.message}

            />
            <Stack direction={"row"} spacing={2} > 
              <Button type='submit' variant='contained' fullWidth>
                Sign In
              </Button>
              <Button variant='contained' fullWidth onClick={signInWithGoogle}>
                Google sign in
              </Button>
            </Stack>
            
          </Stack>
        </form>              
    </Grid>
  );
};

export default SignInForm;
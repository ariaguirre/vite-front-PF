//React
import { useState } from 'react';
//Material UI
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
//Firebase
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebaseClient';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();  


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup(); 
      navigate("/");
    } catch (error) {
      console.error(error)
    }
    

  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/");
      resetFormFields();      
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Grid item md={5} sm={12} justifyItems={"center"}>
      <Typography variant="h4" color="initial" align='center'>
        Already have an account?
      </Typography>
      <Typography variant='body1' color="initial" align='center'>
        Sign in with your email and password
      </Typography>
      <Grid container justifyContent={"center"}>
        <FormControl variant='standard' fullWidth align="center" >
          <TextField
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
            margin='dense'
          />
          <TextField
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
            margin='dense'
          />
          <Grid container justifyContent={"space-between"} alignItems={"center"} gap={1}>
            <Grid item sm={5} xs={12} margin={"1rem 0"}>
              <Button type='submit' variant='contained' onClick={handleSubmit} fullWidth>
                Sign In
              </Button>
            </Grid>
            <Grid item sm={6} xs={12} >
              <Button variant='contained' onClick={signInWithGoogle} fullWidth>
                Google sign in
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { getCredentials } from '../../features/userCredentials/userCredentialsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebaseClient';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup().then(async (data)=>{
      if(!data.code){
        setLoading(loading => !loading)
        await createUserDocumentFromAuth(data.user);
        dispatch(getCredentials(data.user.uid))
        setLoading(loading => loading)
        navigate('/'); 
      }else{
        console.log("El usuario cerro el popup de google, no hacer nada")
      }
    })
 
  };
 
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    setLoading(loading => !loading)
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      setLoading(loading => loading)
      navigate('/');
    } catch (error) {
      setLoading(loading => loading)
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (

    <Grid item md={5} sm={12} justifyItems={"center"}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
           open={loading}
          >
          <CircularProgress color="inherit" />
         </Backdrop>
      <Typography variant="h4" color="initial" align='center'>Already have an account?</Typography>
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
          <Grid container  justifyContent={"space-between"} alignItems={"center"} gap={1}>
       
            <Grid item  sm={5} xs={12} margin={"1rem 0"}>
              <Button type='submit' variant='contained' onClick={handleSubmit} fullWidth  >Sign In</Button>
            </Grid>
            <Grid item sm={6} xs={12} >
            <Button variant='contained' onClick={signInWithGoogle} fullWidth>Google sign in</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
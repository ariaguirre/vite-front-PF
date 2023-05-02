//React 
import {  useState } from 'react';
//Material UI 
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
//Firebase 
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebaseClient';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }    
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );        
      await createUserDocumentFromAuth(user, { displayName });         
      resetFormFields();      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Grid item md={5} sm={12} justifyItems={"center"}>  
      <Typography variant="h4" color="initial" align='center'>Don&#39;t have an account?</Typography>
      <Typography variant="body1" align='center'>Sign up with your email and password</Typography>
      <Grid container justifyContent={"center"}>
      <FormControl variant='standard' margin='dense'  fullWidth >
        <TextField
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}                        
        />    

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

        <TextField
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          margin='dense'
        />
        <Button  onClick={()=>handleSubmit()} variant='contained' margin='dense'>Sign Up</Button>
      </FormControl>
      </Grid>           
    </Grid>
  );
};

export default SignUpForm;
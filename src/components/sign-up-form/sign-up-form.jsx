import { useState } from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

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

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    <Grid item md={6} xs={12} justifyItems={"center"}>
      <h2>Don&#39;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <FormControl onSubmit={handleSubmit}>
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
        />

        <TextField
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <TextField
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit' variant='contained'sx={{boder:1 , marginTop: "20px 0"}} >Sign Up</Button>
      </FormControl>          
    </Grid>
  );
};

export default SignUpForm;
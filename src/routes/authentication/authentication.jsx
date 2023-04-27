import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import Grid from '@mui/material/Grid'; 

const Authentication = () => {
  return (
    <Grid
      container      
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
    
      <Grid container>
        <SignInForm />
        <SignUpForm />
      </Grid>
    </Grid>  

  );
};

export default Authentication;
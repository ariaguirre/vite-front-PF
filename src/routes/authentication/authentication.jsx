import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import Container from '@mui/material/Container'
import { useTheme } from '@emotion/react';
import { Grid} from '@mui/material';

const Authentication = () => {
  const theme = useTheme();

  return (    

    <Container 
    maxWidth="xl" 
    style={{
      height: (`calc(100vh - ${theme.spacing(10)})`),                 
    }}              
    >       
        <Grid container spacing={2} pt={4}>
          <SignInForm />
          <SignUpForm />
        </Grid>               
      </Container>
      
      
  );
};

export default Authentication;
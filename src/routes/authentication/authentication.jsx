import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'

const Authentication = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid container justifyContent={"space-evenly"} alignItems={'flex-start'} gap={2}>
          <SignInForm />
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Authentication;
import { useForm } from 'react-hook-form';
import styles from './reset.module.css'

import { resetPasswordEmail } from '../../utils/firebase/firebaseClient'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material';
import Swal from 'sweetalert2';


const ResetPass = () => {

  const resetForm = useForm({
    defaultValues: {
      email: ""
    }
  });
  const { register, handleSubmit, formState: { errors } } = resetForm;

  const onSubmitResetPassword = async ({ email }) => {
    try {
      await resetPasswordEmail(email)
      Swal.fire('Verifica tu email', '', 'info')
    } catch (error) {
      Swal.fire('Error', 'intenta de nuevo', 'error')
    }
  }


  return (
    <main className={styles.resetPasswordContainer}>
      <Typography variant="h3" color="primary">Recupera tu contraseña</Typography>
      <section className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmitResetPassword)}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type='Email'
              autoComplete=''
              required
              {...register("email", { required: "Por favor ingrese el email a recuperar la contraseña" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            >
            </TextField>
          </Stack>
          <button type='submit'>Recuperar contraseña</button>
        </form>
      </section>
    </main>
  );
};

export default ResetPass



/*
    <div className={styles.resetPasswordContainer}>
      <div className={styles.fullContainer}>
        <h2>Recupera tu contraseña</h2>
        <TextField
          label='Correo electrónico'
          type='text'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete=""
          sx={{
            width: '40%', marginBottom: '1rem',
            marginTop: '3%'
          }}
        />
        <button onClick={handlePasswordReset}>Enviar correo de recuperación</button>
      </div>
    </div>

*/
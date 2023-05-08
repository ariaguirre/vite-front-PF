import TextField from '@mui/material/TextField'
import { useForm } from "react-hook-form"
import PaymentForm from '../payment-form/payment-form'
import Stack from '@mui/material/Stack'

import styles from "./checkout-form.module.css"
import { useState } from 'react'

const CheckoutForm = () => {

  const [allData, setAllData] = useState();

  const checkoutform = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      company: "",
      country: "",
      streetA: "",
      ZIPcode: "",
      phone: "",
      email: "",
      orderNotes: ""
    }
  })

  const { register, handleSubmit, formState: { errors } } = checkoutform;

  const onSubmit = (e) => {
    setAllData(e);
  }
  return (
    allData 
    ? <div>
      <PaymentForm />
    </div>  :
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Nombre"
          type="text"
          autoComplete=""
          required
          {...register("name", { required: "Ingrese el nombre del destinatario" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Apellido"
          type="text"
          autoComplete=""
          required
          {...register("lastName", { required: "Ingrese el apellido del destinatario" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <TextField
          label="Nombre de la Empresa"
          type="text"
          autoComplete=""
          {...register("company")}
          error={!!errors.company}
          helperText={errors.company?.message}
        />

        <TextField
          label="Cuidad"
          type="text"
          autoComplete=""
          required
          {...register("country", { required: "Ingrese la cuidad del destinatario" })}
          error={!!errors.country}
          helperText={errors.country?.message}
        />
        <TextField
          label="Dirreción"
          type="text"
          autoComplete=""
          required
          {...register("streetA", { required: "Ingrese la direccion del destinatario" })}
          error={!!errors.streetA}
          helperText={errors.streetA?.message}
        />
        <TextField
          label="Codigo postal "
          type="text"
          autoComplete=""
          required
          {...register("ZIPcode", { required: "Ingrese el codigo postal del destinatario" })}
          error={!!errors.ZIPcode}
          helperText={errors.ZIPcode?.message}
        />
        <TextField
          label="Numero de telefono "
          type="text"
          autoComplete=""
          required
          {...register("phone", { required: "Ingrese el numero de celular del destinatario" })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <TextField
          label="Email"
          type="text"
          autoComplete=""
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Informacion adicional"
          type="text"
          autoComplete=""
          {...register("orderNotes")}
          error={!!errors.orderNotes}
          helperText={errors.orderNotes?.message}
        />
        <div>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.btn}>Enviar</button>
        </div>
      </Stack>
    </form>
   
  )
}

export default CheckoutForm

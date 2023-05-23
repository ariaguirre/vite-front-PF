import style from "./contactForm.module.css"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'


const ContactForm = () => {

    return(
        <div>
        <h2>Contactanos</h2>
        <br/>
      <Stack spacing={2}  sx = {{
        width: '50%',
        marginLeft: '25%',  
        justifyContent: 'center', 
      }}>
        <TextField
          label="Email"
          type="email"
          autoComplete=""
          required
        />
        <TextField
          label="Nombre"
          type="text"
          autoComplete=""
          required
        />
        <TextField
          label="Asunto"
          type="text"
          autoComplete=""
          required
        />
        <TextField
          label="Consulta, sugerencia o comentario"
          type="text"
          autoComplete=""
          required
          size="large"
          className={style.consulta}
          sx = {{
            marginBottom: '60%'
          }}
        />
      </Stack>
        </div>
    )
}

export default ContactForm;
import style from "./contactForm.module.css"
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import {useState} from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";




const ContactForm = () => {

    //EmailJs
    const service = 'service_82h1k7l';
    const template = 'template_lgs2fiu';
    const apiKey = 'oqauhqfeYX6gN7rRJ';


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [issue, setIssue] = useState('')
    const [text, setText] = useState('')

    console.log(params)
    const sendEmail = () => {
        const params = {
            email: email,
            fromName: name,
            issue: issue,
            message: text
        }
        email.send(service, template, params, apiKey).then(
            Swal.fire({
                title: 'Correo enviado!',
                text: 'Pronto responderemos tu mensaje.',
                icon: 'success',
              })
        )
    }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Nombre"
          type="text"
          autoComplete=""
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Asunto"
          type="text"
          autoComplete=""
          required
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <TextField
          label="Consulta, sugerencia o comentario"
          type="text"
          autoComplete=""
          required
          size="large"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={style.consulta}
          sx = {{
            marginBottom: '60%'
          }}
        />
          <button type="submit" className={style.btn}>Enviar</button>
      </Stack>
        </div>
    )
}

export default ContactForm;
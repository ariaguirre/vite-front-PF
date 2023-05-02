import BabyCrying from "../../img/crying.png";
import "../404/404.css";


export default function Error(){


    return(<div className='bg'>
        <div className='contenedor flex-404'>
            <h1 className='text404'>Lo sentimos, la pagína que buscas no está disponible</h1>
            <img className='babyCrying' src={BabyCrying} alt={404} />
            <h1 className='text404'>error 404</h1>
        </div>
    </div>)
}
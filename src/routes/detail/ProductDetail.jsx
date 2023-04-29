import { useState } from 'react';
import "../../index.css";
import '../detail/ProductDetail.css';
 



export default function DetailProduct(){
 


  const [cant, setCant] = useState(0)


  const handleInput = (e) =>{
    setCant(() => e.target.value)
  }


  const handlerButton = (e) =>{
    e.preventDefault()
  }

  return<div className="detail">
      <div className="contenedor p-Detail">

              <img src='https://http2.mlstatic.com/D_NQ_NP_656735-MCO48794245078_012022-O.webp' className=" imgDetail" alt={name} />
         
          
          <div className=" infDetail ">
            <form>
              <h2 className='titleDetail'>coche para bebé + silla para carro</h2>
              <hr/>
              <div className="infoInicial">
                <p>precio:<span className='money'>$</span><span className='price'>150</span></p>
                <p>estrellas:</p>
                <p>Disponible en stock:<span>si</span></p>
                <div className='cant-field flex' >
                  <p>Cantidad:</p>
                  <input type="number" min='0' className="cant" onChange={ (e) => handleInput(e)}/>
                </div>
              
              <button className='addCar' onClick={(e) => handlerButton(e)} >Añadir al carrito</button>
              </div>
              <hr/>
              <div>
                <h3>Tipos de entrega</h3>
                <p>Retiro en tienda:</p>
                <p>Disponible para despacho</p>
              </div>
            </form>
        </div>

      </div>

        <div className="contenedor caract">
          <h2 className="titleII">Caracteristicas del Producto</h2>
            <p className="">Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.</p>

          <div className='caractComplete'>

            <h3 className='titleIII'>Caracteristicas:</h3>
            <ul className='caractList'>
              <li>dato1</li>
              <li>dato2</li>
              <li>dato3</li>
              <li>dato4</li>
            </ul>

            <h3 className='titleIII'>Garantía:</h3>
            <ul className='caractList'>
              <li>dato1</li>
              <li>dato2</li>
              <li>dato3</li>
              <li>dato4</li>
            </ul>

          </div>
        </div>


  </div>
}
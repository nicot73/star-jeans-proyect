import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import './ContactUs.css';
import contactImage from '../../../assets/headerAboutUs.jpg';

const contactUs = () => {
  return (
    <>
      <div className='contactHeader'>
        <img src={contactImage} alt="contactImage" />
      </div>
      <div className='contactContainer'>
        <div className='leftContainer'>
          <ul>
            <li><p><WhatsAppIcon/> +54 9 11 3347-9005</p></li>
            <li><p><PhoneAndroidIcon/>Gerente de ventas: +54 11 6402-0431 <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gastón Molinari</p></li>
            <li><p><EmailIcon/> starjeansventas@yahoo.com.ar</p></li>
            <li><p><PlaceIcon/> Arrecifes, Buenos Aires, Argentina</p></li>
          </ul>
        </div>

        <div className='rightContainer'>
          <form action="https://formsubmit.co/starjeansventas@yahoo.com.ar" method="POST">
            <div className='formGroup'>
              <label htmlFor='name'>
                Nombre
                <input type='text' id='name' name='name' placeholder='Ingresar nombre' required/>
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='lastName'>
                Apellido
                <input type='text' id='lastName' name='last-name' placeholder='Ingresar apellido' required/>
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>
                E-mail
                <input type='email' id='email' name='email' placeholder='Ingresar email' required/>
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='phone'>
                Telefono
                <input type='phone' id='phone' name='phone' placeholder='Ingresar número de contacto' required/>
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='message'>
                Mensaje
                <textarea type='text' id='message' name='message' placeholder='Ingresar mensaje' required/>
              </label>
            </div>
            <div className="formGroup">
              <button type='submit'>ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default contactUs
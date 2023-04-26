import React from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import './ContactStyle.css';
import contactImage from '../../../assets/ContactImg.jpg';

const contactUs = () => {
  return (
    <>
      <div id='toTop' className='contactHeader'>
        <img src={contactImage} alt="contactImage" />
      </div>
      <div className='contactContainer'>
        <div className='contactInfo'>
          <ul>
            <li><p><WhatsAppIcon/> +54 9 11 3347-9005</p></li>
            <li><p><PhoneAndroidIcon/> Gerente de ventas Gastón Molinari: +54 11 6402-0431</p></li>
            <li><p><EmailIcon/> starjeansventamayorista@gmail.com</p></li>
            <li><p><PlaceIcon/> Arrecifes, Buenos Aires, Argentina</p></li>
          </ul>
        </div>
        <div className="formContainer">
          <form action="https://formsubmit.co/starjeansventamayorista@gmail.com" method="POST">
            <h2>CONTACTO</h2>
            <div className="formGroup flexWrap">
              <label htmlFor="nombre">
                <input type="text" name='nombre' placeholder='NOMBRE *' required/>
              </label>
              <label htmlFor="apellido">
                <input type="text" name='apellido' placeholder='APELLIDO *' required/>
              </label>
            </div>
            <div className="formGroup">
              <label htmlFor="telefono-celular">
                <input type="text" name='telefono-celular' placeholder='TELEFONO CELULAR *' required/>
              </label>
            </div>
            <div className="formGroup">
              <label htmlFor="mail">
                <input type="text" name='mail' placeholder='MAIL *' required/>
              </label>
            </div>
            <div className='formGroup'>
              <label htmlFor='message'>
                <textarea type='text' name='mensaje' placeholder='MENSAJE *' required/>
              </label>
            </div>
            <div className="formGroup d-block">
              <p>Todos los campos son obligatorios.</p>
              <button type='submit'>ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default contactUs
import React from 'react';
import './Footer.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='divFooter'>
        <div className='divContainer'>
            <div className="divRow">
                <div className='divFooter-col'>
                    <h4>INFORMACIÓN</h4>
                    <ul>
                        <li><NavLink to={'/about-us'}><InfoIcon/> Sobre nosotros</NavLink></li>
                        <li><p><PhoneAndroidIcon/> xxx-xxxx-xxx</p></li>
                        <li><p><EmailIcon/> starjeans@gmail.com</p></li>
                        <li><p><AccessTimeIcon/> Horarios de atención: xx:xx</p></li>
                        <li><p><PlaceIcon/> Nuestros locales</p></li>
                    </ul>
                </div>
                <div className='divFooter-col'>
                    <h4>SERVICIOS</h4>
                    <ul>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">¿Cómo comprar?</a></li>
                        <li><a href="#">Cambios y devoluciones</a></li>
                        <li><a href="#">Envíos</a></li>
                        <li><a href="#">Formas de pago</a></li>
                    </ul>
                </div>
                <div className='divFooter-col'>
                    <h4>TIENDA ONLINE</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div className='divFooter-col'>
                    <h4>SEGUINOS</h4>
                    <div className='social-links'>
                        <a href="https://www.facebook.com/starjeansoficial/"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/starjeans_arrecifes/"><InstagramIcon/></a>
                        <a href="https://wa.me/5492478557497"><WhatsAppIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
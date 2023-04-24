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
                        <li><p><PhoneAndroidIcon/> +54 9 11 3347-9005</p></li>
                        <li><p><EmailIcon/> starjeansventas@yahoo.com.ar</p></li>
                        <li><p><AccessTimeIcon/> Horarios de atención: 08:00hs - 16:00hs</p></li>
                        <li><NavLink to={'/about-us'}><PlaceIcon/> Nuestros locales</NavLink></li>
                    </ul>
                </div>
                <div className='divFooter-col'>
                    <h4>SEGUINOS</h4>
                    <div className='social-links'>
                        <a href="https://www.facebook.com/starjeansoficial/"><FacebookIcon/></a>
                        <a href="https://www.instagram.com/starjeans_arrecifes/"><InstagramIcon/></a>
                        <a href="https://wa.me/5491133479005"><WhatsAppIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
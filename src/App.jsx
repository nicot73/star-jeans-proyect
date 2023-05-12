import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import WholesaleContact from './components/Pages/ContactUs/WholesaleContact';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WAPhoto from './assets/StarJeansLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/category/:category'} element={<ItemListContainer/>} />
          <Route path={'/product/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/about-us'} element={<AboutUs/>} />
          <Route path={'/contact-us'} element={<ContactUs/>} />
          <Route path={'/wholesale-contact'} element={<WholesaleContact/>} />
        </Routes>
        <ScrollToTop/>
        <FloatingWhatsApp 
          phoneNumber='5491133479005' 
          accountName='Star Jeans' 
          chatMessage='¡Hola! ¿En qué puedo ayudarlo?' 
          statusMessage='En línea' 
          allowClickAway='false'
          allowEsc='false'
          placeholder='Mensaje'
          avatar={WAPhoto}
        />    
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
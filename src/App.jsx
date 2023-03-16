import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Men from './components/Pages/Women';
import Women from './components/Pages/Women';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WAPhoto from './assets/StarJeansLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/category/:category'} element={<ItemListContainer/>} />
          <Route path={'/category/:category'} element={<Men/>} />
          <Route path={'/category/:category'} element={<Women/>} />
          <Route path={'/product/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/about-us'} element={<AboutUs/>} />
          <Route path={'/contact-us'} element={<ContactUs/>} />
        </Routes>
        <FloatingWhatsApp 
          phoneNumber='5492478557497' 
          accountName='Star Jeans' 
          chatMessage='¡Hola! ¿En qué puedo ayudarlo?' 
          statusMessage='En línea' 
          allowClickAway='false'
          allowEsc='false'
          placeholder='Mensaje'
          avatar={WAPhoto}
        />    
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
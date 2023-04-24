import React from 'react';
import './AboutUs.css';
import { Parallax } from 'react-parallax';
import Img1 from '../../../assets/ParallaxImg1.jpg';
import Img2 from '../../../assets/ParallaxImg2.jpg';
import Img3 from '../../../assets/ParallaxImg3.jpg';

const aboutUs = () => {

  return (
    <>
    <Parallax className='imageParallax' bgImage={Img1} strength={200}>
        <div className='content'>
          <h1 className='borderTitle'><span>NOSO</span>TROS.</h1>
        </div>
    </Parallax>
    <Parallax className='imageParallax' bgImage={Img2} strength={200}>
      <div className='content'>
        <div className='text-box'>
          <p>
            Somos una empresa familiar iniciada en el año 1992 en la ciudad de Arrecifes, Provincia de Buenos Aires, donde aún se encuentra nuestra casa central.
            <br />
            <br />
            Nuestras prendas son 100% argentinas. Creemos en la industria nacional y apostamos a ella.
            <br />
            <br />
            Nos especializamos en el rubro jeanería con un estilo urbano que se centra en la comodidad y calidad de las prendas.
            <br />
            <br /> 
            Tanto en la colección de dama como de hombre buscamos innovar en procesos de lavado, tratamiento de textiles y desarrollo de molderías que van desde lo clásico a las tendencias actuales.
          </p>
        </div>
      </div>
    </Parallax>
    <Parallax className='imageParallax' bgImage={Img3} strength={200}>
      <div className='content'>
        <div className='text-box'>
          <h2 className='borderText'>NUESTROS LOCALES</h2>          
          <h5 className='borderText'>STAR JEANS ARRECIFES</h5>
          <p>
            Av. Belgrano 237 Arrecifes, Provincia de Buenos Aires, Argentina.
            <br />
            <br />
            Ruta 8 km 177.5 Arrecifes, Provincia de Buenos Aires, Argentina.
            <br />
            <br />
          </p>
          <h5 className='borderText'>STAR JEANS CAPITÁN SARMIENTO</h5>
          <p>
            Av. Rivadavia 784 Capitán Sarmiento, Provincia de Buenos Aires, Argentina.
          </p>
        </div>
      </div>
    </Parallax>
    </>
  )
}

export default aboutUs
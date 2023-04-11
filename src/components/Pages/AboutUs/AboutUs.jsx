import React from 'react';
import './AboutUs.css';
import { Parallax } from 'react-parallax';
import LogoStarJeansWhite from '../../../assets/WhiteLogo-StarJeans.png';
import Img1 from '../../../assets/imgParallax2.jpg';
import Img2 from '../../../assets/imgParallax5.jpg';
import Img3 from '../../../assets/imgParallax4.jpg';
import LogoStarJeansBlack from '../../../assets/BlackLogo-StarJeans.png';


const aboutUs = () => {

  return (
    <>
    <Parallax className='imageParallax' bgImage={Img1} strength={200}>
        <div className="content">
            <img src={LogoStarJeansWhite} alt="Logo Star Jeans" className='logoStar'/>
        </div>
    </Parallax>
    <Parallax className='imageParallax' bgImage={Img2} strength={200}>
        <div className="content">
          <div className="text-box">
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
        <div className="content">
            <img src={LogoStarJeansBlack} alt="Logo Star Jeans" className='logoStar'/>
        </div>
    </Parallax>
    </>
  )
}

export default aboutUs
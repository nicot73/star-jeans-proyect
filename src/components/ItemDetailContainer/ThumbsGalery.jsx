import React, { useState } from 'react';
import './StylesThumbs.css';

const ThumbsGalery = ({ listProduct }) => {

    const [sliderImage, setSliderImage] = useState(listProduct.image[0])
    const handleClick=(index) => {
        console.log(index);
        const slider = listProduct.image[index];
        setSliderImage(slider);
    }

  return (
    <div className='mainStyle'>
        <img src={sliderImage} height='300' width='220'/>
        <div className='flexRow'>
            {
            listProduct.image.map((image, i) => {
                return  <div className='thumbnail'>
                            <img src={image} key={`${i}`} alt={`Img ${i}`} onClick={()=>handleClick(i)} height='100' width='100' className={sliderImage[i]==i ? 'clicked' : ''}/>
                        </div>
            })
            }
        </div>
    </div>
  )
}

export default ThumbsGalery
import React, { useState } from 'react';
import './ImageSelector.css';

const ImageSelector = ({ listProduct }) => {

    const [sliderImage, setSliderImage] = useState(listProduct.image[0]);
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick=(index) => {
        console.log(index);
        const slider = listProduct.image[index];
        const selectIndex = index;
        setSliderImage(slider);
        setSliderIndex(selectIndex);
    }

  return (
    <div className='mainContainer'>
        <div className='containerDiv'>     
                <div className="imgContainer">
                    <img src={sliderImage} alt="mainImg" className='mainImg'/>
                </div>
                <div className="thumbnailContainer">
                    {listProduct.image.map((image, i) => {
                        return <img src={image} key={i} alt={`Img ${i}`} onClick={()=>handleClick(i)} className={`thumbnail ${sliderIndex===i ? 'activeImage' : ''}`}/>
                    })}
                </div>   
        </div>
        <div className="containerDiv">

        </div>
    </div>
  )
}

export default ImageSelector
import React, { useState } from 'react';
import './ImageSelector.css';

const ItemDetail = ({ listProduct }) => {

    const [sliderImage, setSliderImage] = useState(listProduct.image[0]);
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick=(index) => {
        const slider = listProduct.image[index];
        const selectIndex = index;
        setSliderImage(slider);
        setSliderIndex(selectIndex);
    }

  return (
    <div className='mainContainer'>

        <div className='imgDivContainer'>  
            <div className='imgContainer'>
                <img src={sliderImage} alt='mainImg' className='mainImg'/>
            </div>
            <div className='thumbnailContainer'>
                {listProduct.image.map((image, i) => 
                    <img src={image} key={i} alt={`Img ${i}`} onClick={()=>handleClick(i)} className={`thumbnail ${sliderIndex===i ? 'activeImage' : ''}`}/>
                )}     
            </div>
        </div>
        <div className="detailDivContainer">
            <h4 className='borderBottom'>{listProduct.title}</h4>
            <p className='borderBottom'><span>DESCRIPCIÓN:</span> {listProduct.description}</p>
            <p className='borderBottom'><span>COMPOSICIÓN:</span> {listProduct.composition}</p>
            <p className='borderBottom'><span>REFERENCIA:</span> {listProduct.reference}</p>
            <p className='borderBottom'><span>COD:</span> {listProduct.code}</p>
            <p><span>TALLES:</span> {listProduct.sizes}</p>
        </div>

    </div>
  )
}

export default ItemDetail
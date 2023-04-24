import React, { useState } from 'react';
import './ScrollToTop.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 250) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <div className='scrollContainer'>
          {showButton && <span onClick={handleClick} className='srollToTop'><KeyboardDoubleArrowUpIcon fontSize='large'/></span>}
      </div>
    )
}

export default ScrollToTop
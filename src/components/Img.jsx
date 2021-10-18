import React from 'react';
import '../styles/Img.scss';
const Img = (value) => {
    return (
        <img src={value.src} alt={value.alt} />
    )
}

export default Img;
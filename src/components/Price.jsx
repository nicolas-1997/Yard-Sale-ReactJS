import React from 'react';
import '../styles/Price.scss';

const Price = (value) => {
    return (
        <p className={value.ClassName} >{value.price}</p>
    )
}

export default Price

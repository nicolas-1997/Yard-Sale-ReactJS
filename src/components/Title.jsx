import React from 'react';
import '../styles/Title.scss';

const Title = (values) => {
    return (
        <h1 className={values.classTitle} >{values.title}</h1>
    )
}


export default Title

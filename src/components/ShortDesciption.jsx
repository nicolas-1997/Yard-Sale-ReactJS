import React from 'react'
import '../styles/ShortDesciption.scss'

const ShortDesciption = (value) => {
    return (
        <p className={value.ClassName} >{value.text}</p>
    )
}

export default ShortDesciption

import React from 'react'
import Title from '../components/Title';
import ButtomPrimary from '../components/ButtomPrimary'
import Form from '../components/Form';
import '../styles/EditAccount.scss'
const EditAccount = () => {
    return (
        <div className="login--container">
            <div className="form-container">
                <Title classTitle="title" title="Edit my account" />
                <Form actionForm="/" classnameForm="form" />
                <ButtomPrimary typeButton="submit" classNameButton="secondary-button login-button" valor="Edit Account" /> 
            </div>
        </div>
        
    )
}

export default EditAccount

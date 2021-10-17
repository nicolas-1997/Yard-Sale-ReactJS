import React from "react";


import Form from "../components/Form";
import Title from "../components/Title";
import ButtomPrimary from "../components/ButtomPrimary";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="login--container">
      <div className="form-container">
        <Title classTitle="title" title="My new account" />
        <Form actionForm="/" classnameForm="form" />
        <ButtomPrimary typeButton="submit" classNameButton="primary-button login-button" valor="Create Account :)" />
      </div>
    </div>
  );
};

export default CreateAccount;

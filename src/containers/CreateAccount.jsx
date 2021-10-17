import React from "react";

import ButtomPrimary from "../components/ButtomPrimary";
import Input from "../components/Input";
import Title from "../components/Title";
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="login--container">
      <div className="form-container">
        <Title classTitle="title" title="My new account"/>
        <form action="/" className="form">
          <div>
            <Input label="Name" IdInput="Name" TypeInput="text" PlaceholderInput="Tu Nombre" className="input input-text"/>
            <Input label="Email Addres" IdInput="email" TypeInput="email" PlaceholderInput="example@hotmail.com" className="input input-text"/>
            <Input label="Password" IdInput="new-password" TypeInput="password" PlaceholderInput="********" className="input input-password"/>
          </div>
          <ButtomPrimary valor="Create Account :)"/>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

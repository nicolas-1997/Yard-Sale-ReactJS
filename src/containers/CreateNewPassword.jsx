import React from "react";
import Title from "../components/Title";
import ButtomPrimary from "../components/ButtomPrimary";
import Input from "../components/Input";
import "../styles/CreateNewPassword.scss";

const CreateNewPassword = () => {
  return (
    <div className="login--container">
      <div className="form-container">
        <div>
            <Title classTitle="title" title="Edit my account" />
            <p className="subtitle">Enter a new password for you account</p>
        </div>
        <div>
            <Input
            label="Password"
            IdInput="new-password"
            TypeInput="password"
            PlaceholderInput="********"
            className="input input-password"
            />
            <Input
            label="Re-enter Password"
            IdInput="new-password"
            TypeInput="password"
            PlaceholderInput="********"
            className="input input-password"
            />
        </div>
        <ButtomPrimary
          typeButton="submit"
          classNameButton="primary-button login-button"
          valor="Confirm new password"
        />
      </div>
    </div>
  );
};

export default CreateNewPassword;

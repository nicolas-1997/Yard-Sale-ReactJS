import React from "react";
import ButtomPrimary from "../components/ButtomPrimary";
import '../styles/EmailSent.scss'
const EmailSent = () => {
  return (
    <div className="login--container">
  <div className="container">
    <img src="../assets/Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
    <h1 className="title">Email has been sent!</h1>
    <p className="subtitle">
      Please check your inbox for instructions on how to reset the password
    </p>
    <div className="img-container">
      <img className="icon" src="../assets/Platzi_YardSale_Icons/email.svg" alt="email" />
    </div>
    <ButtomPrimary
          typeButton="submit"
          classNameButton="primary-button login-button"
          valor="Login"
        />
    <p className="resend">
      <span>Didn't receive the email? </span>
      <a href="/">Resend</a>
    </p>
  </div>
</div>

  );
};

export default EmailSent;

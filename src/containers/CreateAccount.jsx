import React from "react";

import ButtomPrimary from "../components/ButtomPrimary";
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="login--container">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              id="name"
              className="input input-text"
            />
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@hotmail.com"
              id="email"
              className="input input-text"
            />
            <label htmlFor="new-password" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              id="new-password"
              className="input input-password"
            />
          </div>
          <ButtomPrimary valor="Create Account :)"/>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;

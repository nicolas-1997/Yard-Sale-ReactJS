import React from "react";

import '../styles/ButtonPrimary.scss';


const ButtomPrimary = (valor) => {
  return (
    <button
      type="submit"
      className="primary-button login-button"
      defaultValue={valor.valor}
    >{valor.valor}</button>
  );
};

export default ButtomPrimary;

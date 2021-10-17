import React from "react";

import '../styles/ButtonPrimary.scss';


const ButtomPrimary = (valor) => {
  return (
    <button
      type={valor.typeButton}
      className={valor.classNameButton}
      defaultValue={valor.valor}
    >{valor.valor}</button>
  );
};

export default ButtomPrimary;

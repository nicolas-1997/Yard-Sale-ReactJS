import React from "react";
import '../styles/Input.scss'


const Input = (values) => {
  return (
    <div>
      <div>
        <label htmlfor={values.IdInput} className="label">
          {values.label}
        </label>
        <input
          type={values.TypeInput}
          placeholder={values.PlaceholderInput}
          id={values.IdInput}
          className={values.className}
        />
      </div>
    </div>
  );
};

export default Input;

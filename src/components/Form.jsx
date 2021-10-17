import React from 'react';
import '../styles/Form.scss';
import Input from "../components/Input";
import ButtomPrimary from "../components/ButtomPrimary";


const Form = (values) => {
    return (
        <form action={values.actionForm} className={values.classnameForm}>
          <div>
            <Input
              label="Name"
              IdInput="Name"
              TypeInput="text"
              PlaceholderInput="Tu Nombre"
              className="input input-text"
            />
            <Input
              label="Email Addres"
              IdInput="email"
              TypeInput="email"
              PlaceholderInput="example@hotmail.com"
              className="input input-text"
            />
            <Input
              label="Password"
              IdInput="new-password"
              TypeInput="password"
              PlaceholderInput="********"
              className="input input-password"
            />
          </div>
        </form>
    )
}

export default Form

import "../../styles/Login.css";
import { useState } from "react";
import Validation from "./Utils/Validation";

export default function Login({ login }) {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="container-formLogin">
      <div className="pageForm">
        <form onSubmit={handleSubmit} className="form-create">
          <h1 className="titleSignIn">Inicia Sesión</h1>

          <div className="form-columns">
            <div className="form-column">
              <label htmlFor="email" className="form-create_label" />
              {/* <i className="login_icons_user-y-password fa-solid fa-user"></i> */}
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="email-login"
                placeholder="Introduce tu email o nombre de usuario"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <span className="spanError">{errors.email}</span>

              <label htmlFor="password" className="form-create_label" />
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="password-login"
                placeholder="Introduce tu contraseña"
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <span className="spanError">{errors.password}</span>
            </div>
          </div>

          <button className="form-button">Inicia Sesión</button>
        </form>
      </div>
    </div>
  );
}

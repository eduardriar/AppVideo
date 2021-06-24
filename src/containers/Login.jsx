import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/containers/Login.scss";
import googleIcon from "../assets/images/google-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import { loginRequest } from "../actions";

function Login(props) {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    // Prevents the default sending of the parameters from the url
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia Sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />

          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Iniciar Sesión</button>
          <div className="login__container--remember-me">
            <label htmlFor="">
              <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="" /> Inicia Sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="" /> Inicia Sesión con Twitter
          </div>
        </section>

        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

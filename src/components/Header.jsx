import React from "react";

import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { gravatar } from "../utils/gravatar";

import Logo from "../assets/images/logo-platzi-video-BW2.png";
import UserIcon from "../assets/images/user-icon.png";
import "../assets/components/Header.scss";

import { connect } from "react-redux";
import { logoutRequest } from "../actions/index";

function Header(props) {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = (useLocation().pathname === "/register" || useLocation().pathname === "/login" ? "greenHeader" : "")

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/">
        <img className="header__img" src={Logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={`${user.email}`} />
          ) : (
            <img src={UserIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">Cuenta de {user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: propTypes.object,
  logoutRequest: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

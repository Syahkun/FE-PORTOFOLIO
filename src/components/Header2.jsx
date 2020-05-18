import React from "react";
import { connect } from "react-redux";
import { doLogout, changeInputUser } from "../store/actions/userAction";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = (props) => {
  const namaPengguna = localStorage.getItem("namaPengguna");
  console.warn("cekkkkkkk", props);
  //function to do logout
  const postSignout = async () => {
    await props.doLogout();
    const is_login = props.logout;
    if (is_login) {
      props.history.push("/");
    }
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-survival101 color-menu">
        <div className="container menu-bar">
          <Link to="/">
            <img src={require("../images/logo-new.png")} alt="L A N T E R N" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto color-menu">
              <li className="nav-item active">
                <a className="nav-link color-menu" href="#">
                  Promos<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kategori
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline">
              <div className="input-group search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                  aria-label="Search for..."
                />
                <span className="input-group-btn tombol-input">
                  <button className="btn btn-secondary" type="button">
                    <i className="ion-search"></i>
                  </button>
                </span>
              </div>
            </form>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav ml-auto color-menu">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Link to="/keranjang">
                      <i className="fa fa-shopping-cart " aria-hidden="true">
                        <span className="badge badge-secondary">7</span>
                      </i>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>

            {props.dataUser.is_login ? (
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto color-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      {namaPengguna}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={() => postSignout()}
                    >
                      Keluar
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/profil-pengguna" className="nav-link">
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto color-menu">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Masuk
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/daftar-pengguna">
                      Daftar
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <section className="caroulsel carbarmenu">
        <div className="caroulsel-wrap carbarmenu-href">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    logout: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInputUser,
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

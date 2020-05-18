import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="head">
      <nav
        className="navbar navbar-expand-lg img-header shadow p-3 mb-5 bg-white rounded "
        // style={{ borderBottom: "solid #bebfc1" }}
        // style={{ backgroundColor: "#0a264e" }}
      >
        <p
          className="navbar-brand logo-text title"
          href="#"
          style={{ fontSize: "5vmin", fontWeight: "bold" }}
        >
          <img
            className="logo App-logo"
            src={require("../images/logo192.png")}
            alt="logo"
          />
          <Link to="/">ASATRON</Link>
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              className="bi bi-toggle-off"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11 4a4 4 0 010 8H8a4.992 4.992 0 002-4 4.992 4.992 0 00-2-4h3zm-6 8a4 4 0 110-8 4 4 0 010 8zM0 8a5 5 0 005 5h6a5 5 0 000-10H5a5 5 0 00-5 5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle text-header"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kategori
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item " href="#">
                  Action
                </p>
                <p className="dropdown-item" href="#">
                  Another action
                </p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item" href="#">
                  Something else here
                </p>
              </div>
            </li>
            <li className="nav-item active">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  style={{ borderRadius: "30px" }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  style={{ borderRadius: "30px" }}
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item active">
              <img
                src={require("../images/cart.png")}
                alt="..."
                className="mr-5 ml-2"
                style={{ width: "6vmin" }}
              />
            </li>
          </ul>
          <button type="button" className="btn btn-warning mx-2 tombol-home">
            <Link to="/daftar-pengguna">Daftar</Link>
          </button>
          <button type="button" className="btn btn-warning mx-2 tombol-home">
            <Link to="/login">Masuk</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

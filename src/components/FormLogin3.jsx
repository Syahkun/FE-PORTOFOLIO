import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/userAction";

const FormLogin = (props) => {
  console.warn("cek this props", props);
  const postLogin = async () => {
    await props.doLogin();
    console.warn("test post login", props);
    const is_login = props.login;
    if (is_login) {
      props.history.push("/");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={(el) => el.preventDefault()}>
                    <div className="form-label-group">
                      <input
                        type="Username"
                        id="inputUsername"
                        name="namaPengguna"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => props.inputUser(e)}
                        required
                        autofocus
                      />
                      <label for="inputUsername">Username</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        name="kataKunci"
                        className="form-control login-input"
                        placeholder="Password"
                        onChange={(e) => props.inputUser(e)}
                        autofocus
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input login-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <Link to="/profil-pengguna">
                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                        onClick={() => postLogin()}
                      >
                        Sign in
                      </button>
                    </Link>
                    <div className="text-center">
                      <a className="small" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInputUser,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);

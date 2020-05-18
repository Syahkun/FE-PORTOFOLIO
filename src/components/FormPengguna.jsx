import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  doLogin,
  changeInputUser,
  changeInputType,
  postPengguna,
} from "../store/actions/userAction";

const FormPengguna = (props, changeInputType, changeInputUser) => {
  // function to do signup
  const postSignUp = async () => {
    await props.postPengguna();
    console.warn("test daftar pengguna", props);
    // const is_login = props.is_login;
    // if (!is_login) {
    //   props.history.push("/");
    // }
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="row ">
        <div
          className="col-sm-4  d-flex justify-content-center  form-penjual"
          style={{}}
        >
          <form
            onSubmit={(el) => el.preventDefault()}
            className=""
            style={{ marginTop: "3vmin" }}
          >
            <div className="d-flex justify-content-center">
              {/* <img
              className="logo App-logo"
              src={require("../images/logo192.png")}
              alt="logo"
            /> */}
            </div>
            <div className="d-flex justify-content-center my-5 login-heading mb-4">
              <a class="navbar-brand" href="#">
                <img
                  src={require("../images/logo-new.png")}
                  alt="L A N T E R N"
                />
              </a>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputUserame"
                name="namaPengguna1"
                className="form-control"
                placeholder="Nama"
                onChange={(e) => props.changeInputUser(e)}
                required
                autofocus
              />
              <label for="inputUserame">Nama</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputKataKunci"
                name="kataKunci1"
                className="form-control"
                placeholder="Password"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputKataKunci">Password</label>
            </div>
            <select
              class="custom-select py-3 form-label-group select-pengguna"
              onChange={(e) => props.changeInputType(e)}
              name="status"
            >
              <option selected>Open this select menu</option>
              <option value="pembeli">Pembeli</option>
              <option value="penjual">Penjual</option>
            </select>
            <div className="form-group row">
              <div className="col-sm-10">
                <Link to="/login">
                  <button
                    type="submit"
                    className="btn btn-primary tombol-daftar"
                    style={{ width: "70vmin", borderRadius: "30px" }}
                    onClick={() => postSignUp()}
                  >
                    Daftar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-8" style={{ paddingRight: "0vmin" }}>
          <img
            class="wall-penjual"
            // style={{ width: "100%" }}
            src={require("../images/riccardo-gazzin-DTo9I7pEPBo-unsplash.jpg")}
            alt="..."
          />
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
  changeInputType,
  doLogin,
  postPengguna,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPengguna);

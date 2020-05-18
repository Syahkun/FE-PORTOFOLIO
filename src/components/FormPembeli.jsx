import React from "react";
import { connect } from "react-redux";
import {
  postPembeli,
  changeInputType,
  changeInputUser,
} from "../store/actions/userAction";
import { Link } from "react-router-dom";

const FormPembeli = (props) => {
  const postPembeliForm = async () => {
    await props.postPembeli();
    console.warn("test daftar pembeli", props);
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="row ">
        <div className="col-sm-8" style={{ paddingRight: "0vmin" }}>
          <img
            class="wall-penjual"
            // style={{ width: "100%" }}
            src={require("../images/hector-martinez-EG49vTtKdvI-unsplash.jpg")}
            alt="..."
          />
        </div>
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
                name="namaPenjual"
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
                type="email"
                id="inputEmail"
                name="emailPenjual"
                className="form-control"
                placeholder="Alamat Email"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputEmail">Alamat Email</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="inputProvinsi"
                name="inputProvinsiPenjual"
                className="form-control"
                placeholder="Provinsi"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputProvinsi">Provinsi</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputKota"
                name="kotaPenjual"
                className="form-control"
                placeholder="Kota"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputKota">Kota</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputKodePos"
                name="kotaPosPenjual"
                className="form-control"
                placeholder="Kode Pos"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputKodePos">Kode Pos</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputTipeKota"
                name="kotaTypePenjual"
                className="form-control"
                placeholder="Tipe Kota"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputTipeKota">Tipe Kota</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputJalan"
                name="jalanPenjual"
                className="form-control"
                placeholder="Jalan"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputJalan">Jalan</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputNoHp"
                name="noHpPenjual"
                className="form-control"
                placeholder="No.Hp"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="inputNoHp">No.Hp</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="TTL"
                name="bod"
                className="form-control"
                placeholder="Tanggal lahir"
                onChange={(e) => props.changeInputUser(e)}
                required
              />
              <label for="TTL">Tanggal lahir</label>
            </div>
            {/* <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Akun Bank
            </label>
            <div className="col-sm-10">
              <input
                type="akun-bank"
                className="form-control"
                id="akun-bank"
                placeholder=" Akun Bank"
              />
            </div>
          </div> */}

            <div className="form-group row">
              <div className="col-sm-10 my-4">
                <Link to="/profil-pengguna">
                  <button
                    type="submit"
                    className="btn btn-primary tombol-daftar"
                    onClick={() => postPembeliForm()}
                    style={{ width: "70vmin", borderRadius: "30px" }}
                  >
                    Daftar
                  </button>
                </Link>
              </div>
            </div>
          </form>
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
  postPembeli,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPembeli);

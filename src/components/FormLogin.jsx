import React from "react";
import Wellcome from "./WellcomeWall";

const FormLogin = (props, postLogin) => {
  console.warn("cek this props", props);
  //   postLogin = async () => {
  //     await props.login();
  //     console.warn("test post login", props);
  //     const is_login = props.is_login;
  //     if (is_login) {
  //       props.history.push("/profile");
  //     }
  //   };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
      <div
        className="row"
        // style={{ width: "18rem" }}
      >
        <div className="col-sm-4  d-flex justify-content-center" style={{}}>
          <form
            onSubmit={(el) => el.preventDefault()}
            className=""
            style={{ marginTop: "25vmin" }}
          >
            <div className="d-flex justify-content-center">
              <img
                className="logo App-logo"
                src={require("../images/logo192.png")}
                alt="logo"
              />
            </div>
            <div className="d-flex justify-content-center my-5">Syahkun</div>
            <div className="">
              <input
                className=""
                type="text"
                name="namaPengguna"
                placeholder="Username"
                onChange={(e) => props.inputUser(e)}
                required
              />
            </div>
            <div className="my-3">
              <input
                style={{ borderRadius: "4vmin" }}
                type="password"
                name="kataKunci"
                placeholder=" Password"
                onChange={(e) => props.inputUser(e)}
                required
              />
            </div>
            <div className="my-5">
              <button
                type="button"
                class="btn btn-info"
                style={{ borderRadius: "7vmin", width: "16rem" }}
                onClick={() => props.login()}
              >
                Masuk
              </button>
            </div>
          </form>
        </div>
        <Wellcome />
      </div>
    </div>
  );
};

export default FormLogin;

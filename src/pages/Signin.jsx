import React, { Component } from "react";
import Header from "../components/Header";
import { doLogin, changeInputUser } from "../store/actions/userAction";

//redux
import { connect } from "react-redux";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    console.warn("test post login", this.props);
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/profile");
    }
  };

  render() {
    console.warn("Cek own props", this.props);
    return (
      <React.Fragment>
        <Header {...this.props} />
        <section
          className="shadow p-3 mb-5 bg-white rounded mx-auto my-5"
          style={{ width: "30rem" }}
        >
          <form onSubmit={(el) => el.preventDefault()} className="card-body">
            <div className="d-flex justify-content-center my-5">
              <img
                className="logo App-logo2"
                src={require("../images/logo192.png")}
                alt="logo"
              />
            </div>
            <div className="d-flex justify-content-center my-5">
              <h2 className="">Movies</h2>
            </div>
            <div className="d-flex justify-content-center">
              <input
                style={{
                  width: "140vmin",
                  borderRadius: "18vmin",
                  height: "8vmin",
                }}
                className=""
                type="text"
                name="namaPengguna"
                placeholder="Username"
                onChange={(el) => this.props.changeInput(el)}
                required
              />
            </div>
            <div className="d-flex justify-content-center mt-3 mb-sm-5">
              <input
                style={{
                  width: "140vmin",
                  borderRadius: "18vmin",
                  height: "8vmin",
                }}
                type="password"
                name="kataKunci"
                placeholder=" Password"
                onChange={(el) => this.props.changeInput(el)}
                required
              />
            </div>
            <div className="d-flex justify-content-center my-5">
              <button
                style={{
                  width: "140vmin",
                  borderRadius: "18vmin",
                  height: "9vmin",
                }}
                class="btn btn-primary"
                onClick={() => this.postLogin()}
              >
                SignIn
              </button>
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <p className="" style={{ color: "blue" }}>
                Belum punya akun? Daftar disini!
              </p>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
// export default withRouter(SignIn);

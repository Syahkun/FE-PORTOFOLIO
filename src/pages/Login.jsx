import React, { Component } from "react";
// import Header from "../components/Header2";
// import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin3";
// import { link } from "react-router-/dom";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/userAction";

class Login extends Component {
  render() {
    console.warn("Cek own props", this.props);
    return (
      <React.Fragment>
        {/* <Header namaUser={this.props.dataUser.nama_pengguna} /> */}
        <FormLogin
          inputUser={this.props.changeInputUser}
          login={this.props.doLogin}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  changeInputUser,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

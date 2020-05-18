import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormPembeli from "../components/FormPembeli";

class DaftarPembeli extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <FormPembeli />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default DaftarPembeli;

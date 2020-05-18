import React from "react";

const Footer = () => {
  return (
    <div
      className=" footer container-fluid py-5 img-footer"
      // style={{ backgroundColor: "#478ee8" }}
    >
      <div className="row ">
        <div className="col-sm-2 mx-auto my-auto">
          <a className="navbar-brand" href="#">
            <img src={require("../images/logo-new.png")} alt="L A N T E R N" />
          </a>
          Bekas baru boleh saja
        </div>
        <div className="col-sm-2 mx-auto my-auto ">
          <p className="mx-auto my-auto">
            Tentang kami <br />
            QnA <br />
            Hubungi kami
          </p>
        </div>
        <div className="col-sm-2 mx-auto my-auto">
          Beli Produkmu
          <br />
          Promo
          <br />
        </div>{" "}
        <div className="col-sm-2 mx-auto my-auto">
          Jual Produkmu
          <br />
          Daftar jadi Merchant kami
        </div>
        <div className="col-sm-2 mx-auto my-auto">
          <p className="">Ikuti kami</p>
          <ul
            className="navbar-nav inline "
            style={{ display: "block ruby", marginTop: "-3vmin" }}
          >
            <li className="mx-2">
              <img
                src={require("../images/ig.png")}
                alt="..."
                style={{ width: "4vmin" }}
              />
            </li>
            <li className="mx-2">
              <img
                src={require("../images/fb.svg")}
                alt="..."
                style={{ width: "4vmin" }}
              />
            </li>
            <li className="mx-2">
              <img
                src={require("../images/tw.png")}
                alt="..."
                style={{ width: "4vmin" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

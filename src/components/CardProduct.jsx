import React from "react";
// import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const humanize = require("humanize");
  const changeRouterId = async (id) => {
    if (props.getProductsById) {
      props.getProductsById(id);
    } else {
      // await props.history.replace("/" + id);
    }
  };
  return (
    <div className=" my-3 d-flex justify-content-center zoom-card  ">
      {/* <Link to="/produk-detail"> */}
      <div
        className="card"
        value={props.id}
        onClick={() => changeRouterId(props.id)}
      >
        <img className="card-img-top " src={props.gambar} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rp{humanize.numberFormat(props.harga)}</h5>
          <p className="card-text">{props.nama}</p>
          <p href="#" className="btn btn-primary">
            Detail
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CardProduct;

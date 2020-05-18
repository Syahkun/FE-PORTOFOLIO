import React from "react";

const DeskipsiProduk2 = (props) => {
  return (
    <div className="container">
      <div className="card card-product-detail">
        <div className="">
          <h1 className="">Description Product</h1>
          <p className="">{props.product.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

export default DeskipsiProduk2;

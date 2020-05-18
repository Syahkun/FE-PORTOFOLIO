import React from "react";

const CartComp = (props) => {
  const humanize = require("humanize");
  console.warn("cek props keran", props);
  return (
    <div className="">
      <div className="container">
        <div className="card card-product-detail">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="details col-md-12">
                <h3 className="product-title">DAFTAR BELANJAANMU</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>
                <h4 className="price">
                  Total Harga:Rp &nbsp;
                  <span>{humanize.numberFormat(props.cart.total_harga)}</span>
                </h4>
                <h4 className="price">
                  Total Produk: {props.cart.total_qty}
                  <span> </span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  Metode Pembayaran:{props.cart.shipping_method_id}
                </h5>
                {/* <h5 className="price">weight: {props.product.berat}kg</h5> */}
                <h5 className="colors">
                  Paket Pengiriman: {props.cart.payment_method_id}
                  {/* <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span> */}
                </h5>

                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
                    Selesaikan Pembayaran
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;

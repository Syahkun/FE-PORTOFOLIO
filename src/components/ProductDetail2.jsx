import React from "react";
// import humanize from "humanize";
import CarouselProduct from "../components/CarouselProduk";
const DetailProduct = (props) => {
  const humanize = require("humanize");
  console.warn("props detail produk cek", props);
  // console.warn("test produk detail", props);
  return (
    <div className="">
      <div className="container">
        <div className="card card-product-detail">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    {/* <img src="http://placekitten.com/400/252" alt="..." /> */}
                    <CarouselProduct {...props} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/400/252" alt="..." />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/400/252" alt="..." />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" alt="..." />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" alt="..." />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {props.product.gambar ? (
                    <li className="active">
                      <img src={props.product.gambar} alt="..." />
                    </li>
                  ) : (
                    <div className=""></div>
                  )}
                  {props.product.gambar1 ? (
                    <li className="active">
                      <img src={props.product.gambar1} alt="..." />
                    </li>
                  ) : (
                    <div className=""></div>
                  )}
                  {props.product.gambar2 ? (
                    <li className="active">
                      <img src={props.product.gambar2} alt="..." />
                    </li>
                  ) : (
                    <div className=""></div>
                  )}
                  {/* <li>
                    <img src="http://placekitten.com/200/126" alt="..." />
                  </li>
                  <li>
                    <img src="http://placekitten.com/200/126" alt="..." />
                  </li> */}
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{props.product.nama}</h3>
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
                  stock: <span>{props.product.stock}</span>
                </h4>
                <h4 className="price">
                  current price: Rp
                  <span> {humanize.numberFormat(props.product.harga)}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes: {props.product.size}
                  <span className="size" data-toggle="tooltip" title="small">
                    {/* s */}
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    {/* m */}
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    {/* l */}
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    {/* xl */}
                  </span>
                </h5>
                {/* <h5 className="price">weight: {props.product.berat}kg</h5> */}
                <h5 className="colors">
                  colors: {props.product.warna}
                  {/* <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span> */}
                </h5>

                <div className="action">
                  <button
                    className="add-to-cart btn btn-default mr-3"
                    type="button"
                    onClick={() =>
                      props.postTransaction(props.product.id, 1, 1, 1)
                    }
                  >
                    add to cart
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

export default DetailProduct;

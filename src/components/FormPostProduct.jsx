import React from "react";
import { connect } from "react-redux";
import {
  postProducts,
  changeInputProduct,
} from "../store/actions/productAction";
import { Link } from "react-router-dom";
// import Wellcome from "./WellcomeWall";

const FormProduct = (props) => {
  const postProductForm = async () => {
    await props.postProducts();
    console.warn("test post produk", props);
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="row ">
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
                <Link to="/">
                  <img
                    src={require("../images/logo-new.png")}
                    alt="L A N T E R N"
                  />
                </Link>
              </a>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputNamaProduk"
                name="namaProduk"
                className="form-control"
                placeholder="Nama"
                onChange={(e) => props.changeInputProduct(e)}
                required
                autofocus
              />
              <label for="inputNamaProduk">Nama</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputGambarProduct"
                name="namaGambarProduk"
                className="form-control"
                placeholder="Gambar"
                onChange={(e) => props.changeInputProduct(e)}
                required
                autofocus
              />
              <label for="inputGambarProduct">Gambar</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputGambarProduct1"
                name="namaGambarProduk1"
                className="form-control"
                placeholder="Gambar 1"
                onChange={(e) => props.changeInputProduct(e)}
                required
                autofocus
              />
              <label for="inputGambarProduct1">Gambar 1</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputGambarProduct2"
                name="namaGambarProduk2"
                className="form-control"
                placeholder="Gambar 2"
                onChange={(e) => props.changeInputProduct(e)}
                required
                autofocus
              />
              <label for="inputGambarProduct2">Gambar 2</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputGambarProduct3"
                name="namaGambarProduk3"
                className="form-control"
                placeholder="Gambar 3"
                onChange={(e) => props.changeInputProduct(e)}
                required
                autofocus
              />
              <label for="inputGambarProduct3">Gambar 3</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputHarga"
                name="hargaProduk"
                className="form-control"
                placeholder="Harga Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputHarga">Harga Produk</label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="inputWarna"
                name="warnaProduk"
                className="form-control"
                placeholder="Warna Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputWarna">Warna Produk</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputBerat"
                name="beratProduk"
                className="form-control"
                placeholder="Berat Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputBerat">Berat Produk</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputSizeProduk"
                name="sizeProduk"
                className="form-control"
                placeholder="Ukuran Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputSizeProduk">Ukuran Produk</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputStock"
                name="StokProduk"
                className="form-control"
                placeholder="Stok Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputStock">Stok Produk</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputPromo"
                name="promoProduk"
                className="form-control"
                placeholder="Promo"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputPromo">Promo</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="diskonProduk"
                name="diskon"
                className="form-control"
                placeholder="Diskon"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="diskonProduk">Diskon</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputKategoriProduk"
                name="kategoriProdukId"
                className="form-control"
                placeholder="Produk Kategori Id"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputKategoriProduk">Produk Kategori Id</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputDeskripsiProduk"
                name="deskripsiProduk"
                className="form-control"
                placeholder="Deskripsi Produk"
                onChange={(e) => props.changeInputProduct(e)}
                required
              />
              <label for="inputDeskripsiProduk">Deskripsi Produk</label>
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
              <div className="col-sm-10">
                <Link to="/profil-pengguna">
                  <button
                    type="submit"
                    className="btn btn-primary tombol-daftar"
                    onClick={() => postProductForm()}
                    style={{ width: "70vmin", borderRadius: "30px" }}
                  >
                    {" "}
                    Daftar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-8" style={{ paddingRight: "0vmin" }}>
          <img
            class="wall-penjual"
            // style={{ width: "100%" }}
            src={require("../images/riccardo-gazzin-DTo9I7pEPBo-unsplash.jpg")}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataProduct: state.product,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInputProduct,
  postProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);

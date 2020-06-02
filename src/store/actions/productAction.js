import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

export const postProducts = () => {
  return async (dispatch, getState) => {
    const nama = getState().product.namaProduk;
    const gambar = getState().product.namaGambarProduk;
    const gambar1 = getState().product.namaGambarProduk1;
    const gambar2 = getState().product.namaGambarProduk2;
    const gambar3 = getState().product.namaGambarProduk3;
    const harga = getState().product.hargaProduk;
    const warna = getState().product.warnaProduk;
    const berat = getState().product.beratProduk;
    const size = getState().product.sizeProduk;
    const stock = getState().product.StokProduk;
    const promo = getState().product.promoProduk;
    const diskon = getState().product.diskon;
    const produk_kategori_id = getState().product.kategoriProdukId;
    const deskripsi = getState().product.deskripsiProduk;
    const bodyRequest = {
      nama: nama,
      gambar: gambar,
      gambar1: gambar1,
      gambar2: gambar2,
      gambar3: gambar3,
      harga: harga,
      warna: warna,
      berat: berat,
      size: size,
      stock: stock,
      promo: promo,
      diskon: diskon,
      produk_kategori_id: produk_kategori_id,
      deskripsi: deskripsi,
    };
    const token = localStorage.getItem("token");
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/produk", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        localStorage.setItem("nama", nama);
        localStorage.setItem("gambar", gambar);
        localStorage.setItem("gambar1", gambar1);
        localStorage.setItem("gambar2", gambar2);
        localStorage.setItem("gambar3", gambar3);
        localStorage.setItem("harga", harga);
        localStorage.setItem("warna", warna);
        localStorage.setItem("berat", berat);
        localStorage.setItem("size", size);
        localStorage.setItem("stock", stock);
        localStorage.setItem("promo", promo);
        localStorage.setItem("diskon", diskon);
        localStorage.setItem("produk_kategori_id", produk_kategori_id);
        localStorage.setItem("deskripsi", deskripsi);
        dispatch({
          type: "SUCCESS_POST_PRODUCT",
          payload: response.data,
        });
      });
  };
};

export const getListProducts = () => {
  return async (dispatch) => {
    //activate loading
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/produk")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_PRODUCTS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const getListProductsCategory = (category) => {
  // alert("belum masuk kategori");
  return async (dispatch) => {
    // alert("masuk kategori");
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/produk")
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_PRODUCTS_CATEGORY",
          payload: response.data.filter(
            (item) => item.produk_kategori_id === category
          ),
        });
      })
      .catch((error) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const getListProductsById = (id) => {
  // alert("belum masuk id");
  return async (dispatch) => {
    // alert("masuk id");
    await dispatch({ type: "ACTIVATE_LOADING" });
    await axios
      .get(baseUrl + "/produk/" + id)
      .then((response) => {
        dispatch({
          type: "REQUEST_LIST_PRODUCTS_BY_ID",
          payload: response.data,
        });
        console.warn("respon data produk", response.data);
      })
      .catch((error) => {
        dispatch({
          type: "DEACTIVATE_LOADING",
        });
      });
  };
};

export const changeInputProduct = (el) => {
  return { type: "CHANGE_INPUT_PRODUCT", payload: el };
};

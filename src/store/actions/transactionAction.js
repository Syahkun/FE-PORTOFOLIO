import axios from "axios";

const baseUrl = "http://0.0.0.0:5000";

export const postTransaction = (
  produk_id,
  qty,
  shipping_method_id,
  payment_method_id
) => {
  alert("blm masuk post transaksi");
  return async (dispatch) => {
    alert("masuk post transaksi");
    // const product_id_transaction = product_id;
    // const qty_transaction = qty;
    // const shipping_method_id_transaction = shipping_method_id;
    const token = localStorage.getItem("token");
    await axios({
      method: "POST",
      url: baseUrl + "/keranjang",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      params: {
        produk_id: produk_id,
        qty: qty,
        shipping_method_id: shipping_method_id,
        payment_method_id: payment_method_id,
      },
    });
  };
};

export const getTransaksi = () => {
  return async (dispatch, getState) => {
    alert("masuk get transactions");
    const token = localStorage.getItem("token");
    await axios
      .get(baseUrl + "/keranjang", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "GET_TRANSACTION",
          payload: response.data,
        });
        console.warn("respon data transaksi kerjan", response.data);
      });
  };
};

// export const deleteTransaksi = () => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     await axios
//     .delete(baseUrl + "/keranjang")

//   }
// }

export const changeInputTransaction = (el) => {
  return { type: "CHANGE_INPUT_TRANSACTION", payload: el };
};

import axios from "axios";

const baseUrl = "https://reak_be.olantern.xyz";

//===========================postpengguna&dologin===================================

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const namaPengguna = getState().user.namaPengguna;
    const kataKunci = getState().user.kataKunci;

    await axios
      .get(baseUrl + "/login", {
        params: {
          nama_pengguna: namaPengguna,
          kata_kunci: kataKunci,
        },
      })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          console.warn("cek response data user", response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("namaPengguna", namaPengguna);
          localStorage.setItem("is_login", true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postPengguna = (props) => {
  // alert("belum masuk");
  return async (dispatch, getState) => {
    // alert("sudah masuk");
    const status = getState().user.status;
    const bodyRequest = {
      nama_pengguna: getState().user.namaPengguna1,
      kata_kunci: getState().user.kataKunci1,
      status: status,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/pengguna", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        localStorage.setItem("status", status);
        dispatch({
          type: "SUCCESS_SIGNUP",
        });
      });
  };
};

//===========================getpenjual===================================

export const postPenjual = () => {
  // alert("belum masuk form penjual");
  return async (dispatch, getState) => {
    // alert("sudah masuk form penjual");
    const namaPenjual = getState().user.namaPenjual;
    const emailPenjual = getState().user.emailPenjual;
    const inputProvinsiPenjual = getState().user.inputProvinsiPenjual;
    const kotaPenjual = getState().user.kotaPenjual;
    const kotaPosPenjual = getState().user.kotaPosPenjual;
    const kotaTypePenjual = getState().user.kotaTypePenjual;
    const jalanPenjual = getState().user.jalanPenjual;
    const noHpPenjual = getState().user.noHpPenjual;
    const akunBankPenjual = getState().user.akunBankPenjual;
    const bodyRequest = {
      nama: namaPenjual,
      email: emailPenjual,
      provinsi: inputProvinsiPenjual,
      kota: kotaPenjual,
      kode_pos: kotaPosPenjual,
      kota_type: kotaTypePenjual,
      street: jalanPenjual,
      phone: noHpPenjual,
      bank_account: akunBankPenjual,
    };
    const token = localStorage.getItem("token");
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/penjual/profile", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          // Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        localStorage.setItem("namaPenjual", namaPenjual);
        localStorage.setItem("emailPenjual", emailPenjual);
        localStorage.setItem("inputProvinsiPenjual", inputProvinsiPenjual);
        localStorage.setItem("kotaPenjual", kotaPenjual);
        localStorage.setItem("kotaPosPenjual", kotaPosPenjual);
        localStorage.setItem("kotaTypePenjual", kotaTypePenjual);
        localStorage.setItem("jalanPenjual", jalanPenjual);
        localStorage.setItem("noHpPenjual", noHpPenjual);
        localStorage.setItem("akunBankPenjual", akunBankPenjual);
        // localStorage.setItem("status", "penjual");
        dispatch({
          type: "SUCCESS_DAFTAR_PENJUAL",
          payload: response.data,
        });
      });
  };
};

export const getPenjual = (props) => {
  const token = localStorage.getItem("token");
  // alert("belum masuk");
  return async (dispatch, getState) => {
    // alert("sudah masuk");
    await axios
      .get(baseUrl + "/penjual/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_PROFIL_PENGGUNA",
          payload: response.data,
        });
        localStorage.setItem("namaPenjual", response.data.nama);
        localStorage.setItem("emailPenjual", response.data.email);
        localStorage.setItem("inputProvinsiPenjual", response.data.provinsi);
        localStorage.setItem("kotaPenjual", response.data.kota);
        localStorage.setItem("kotaPosPenjual", response.data.kota_pos);
        localStorage.setItem("kotaTypePenjual", response.data.kota_type);
        localStorage.setItem("jalanPenjual", response.data.street);
        localStorage.setItem("noHpPenjual", response.data.phone);
        localStorage.setItem("akunBankPenjual", response.data.bank_account);
      });
  };
};

//===========================getpembeli===================================

export const postPembeli = () => {
  // alert("belum masuk form penjual");
  return async (dispatch, getState) => {
    // alert("sudah masuk form penjual");
    const namaPenjual = getState().user.namaPenjual;
    const emailPenjual = getState().user.emailPenjual;
    const inputProvinsiPenjual = getState().user.inputProvinsiPenjual;
    const kotaPenjual = getState().user.kotaPenjual;
    const kotaPosPenjual = getState().user.kotaPosPenjual;
    const kotaTypePenjual = getState().user.kotaTypePenjual;
    const jalanPenjual = getState().user.jalanPenjual;
    const noHpPenjual = getState().user.noHpPenjual;
    const bod = getState().user.TTL;
    const bodyRequest = {
      nama: namaPenjual,
      email: emailPenjual,
      provinsi: inputProvinsiPenjual,
      kota: kotaPenjual,
      kode_pos: kotaPosPenjual,
      kota_type: kotaTypePenjual,
      street: jalanPenjual,
      phone: noHpPenjual,
      bod: bod,
    };
    const token = localStorage.getItem("token");
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/pembeli/profile", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        localStorage.setItem("namaPenjual", namaPenjual);
        localStorage.setItem("emailPenjual", emailPenjual);
        localStorage.setItem("inputProvinsiPenjual", inputProvinsiPenjual);
        localStorage.setItem("kotaPenjual", kotaPenjual);
        localStorage.setItem("kotaPosPenjual", kotaPosPenjual);
        localStorage.setItem("kotaTypePenjual", kotaTypePenjual);
        localStorage.setItem("jalanPenjual", jalanPenjual);
        localStorage.setItem("noHpPenjual", noHpPenjual);
        localStorage.setItem("bod", bod);
        // localStorage.setItem("status", "pembeli");
        dispatch({
          type: "SUCCESS_DAFTAR_PEMBELI",
          payload: response.data,
        });
      });
  };
};

//===========================changeinput===================================

export const changeInputUser = (el) => {
  return { type: "CHANGE_INPUT_USER", payload: el };
};

export const changeInputType = (e) => {
  return { type: "CHANGE_TYPE", payload: e };
};

export const doLogout = (e) => {
  // localStorage.clear();
  return {
    type: "LOG_OUT",
    payload: e,
  };
};

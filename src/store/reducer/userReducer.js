const initialState = {
  nama_pengguna: "",
  kata_kunci: "",
  token: "",
  is_loading: true,
  is_login: false,
  // status: "",
  // nama_penjual: "",
  // email: "",
  // provinsi: "",
  // kota: "",
  // kode_pos: "",
  // tipe_kota: "",
  // jalan: "",
  // no_hp: "",
  // akun_bank: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        nama_pengguna: action.payload.nama_pengguna,
        status: action.payload.status,
        is_login: true,
        is_loading: false,
      };
    case "LOG_OUT":
      return {
        is_login: false,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
        is_login: false,
      };
    case "CHANGE_TYPE":
      return {
        ...userState,
        status: action.payload.target.value,
      };
    case "SUCCESS_DAFTAR_PENJUAL":
      return {
        ...userState,
        // nama_penjual: action.payload.nama,
        // email: action.payload.email,
        // provinsi: action.payload.provinsi,
        // kota: action.payload.kota,
        // kode_pos: action.payload.kode_pos,
        // tipe_kota:action.payload.kota_type,
        // jalan: action.payload.street,
        // no_hp: action.payload.phone,
        // akun_bank: action.payload.bank_account,
        is_loading: false,
        is_login: true,
        status: "penjual",
      };
    case "SUCCESS_GET_PROFIL_PENGGUNA":
      return {
        ...userState,
        data: action.payload,
      };
    case "SUCCESS_DAFTAR_PEMBELI":
      return {
        ...userState,
        is_login: true,
        status: "pembeli",
      };
    default:
      return userState;
  }
}

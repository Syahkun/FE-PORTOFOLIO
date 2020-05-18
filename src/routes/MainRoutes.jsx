import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Login from "../pages/Login";
import DaftarPengguna from "../pages/DaftarPengguna";
import DaftarPembeli from "../pages/DaftarPembeli";
import DaftarPenjual from "../pages/DaftarPenjual";
import ProdukDetail from "../pages/ProdukDetailPage";
import ProfilPengguna from "../pages/Profile";
import postProduct from "../pages/PostProduct";
import Cart from "../pages/CartPage";
// import { Provider } from "react-redux";
// import { Provider } from "react-redux";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/daftar-pengguna" component={DaftarPengguna} />
          <Route exact path="/daftar-pembeli" component={DaftarPembeli} />
          <Route exact path="/daftar-penjual" component={DaftarPenjual} />
          {/* <Route exact path="/produk-detail" component={ProdukDetail} /> */}
          <Route exact path="/profil-pengguna" component={ProfilPengguna} />
          <Route exact path="/postproduk" component={postProduct} />
          <Route exact path="/keranjang" component={Cart} />
          <Route exact path="/:category" component={Home} />
          <Route exact path="/detail-produk/:Id" component={ProdukDetail} />
          {/* <Route exact path="/:id" component={} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;

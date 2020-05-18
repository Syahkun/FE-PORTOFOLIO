import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import CartComp from "../components/CartComp";
import { getTransaksi } from "../store/actions/transactionAction";

class CartPage extends Component {
  componentDidMount = async () => {
    this.props.getTransaksi();
  };
  render() {
    const Cart = this.props.dataTransaction.cart;
    return (
      <div className="">
        <React.Fragment>
          <Header />
          <div className="">
            <CartComp cart={Cart} />
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getTransaksi,
};

const mapStateToProps = (state) => {
  return {
    dataTransaction: state.transaction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

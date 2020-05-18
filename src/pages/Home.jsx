import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header2";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import CardProduct from "../components/CardProduct";
import SlideBar from "../components/SlideBar";
import Carousel1 from "../components/Carousel1";
import CardBrand from "../components/CardBrand";
import {
  getListProducts,
  getListProductsCategory,
  getListProductsById,
} from "../store/actions/productAction";

class Home extends Component {
  componentDidMount = async () => {
    //get list proudcts from API
    this.props.getListProducts();
  };
  handleRequestCategoryProducts = async (categoryName) => {
    //change history url only
    await this.props.history.replace("/" + categoryName);
    //get param from url
    this.props.getListProductsCategory(categoryName);
  };

  handleRequestByIdProducts = async (id) => {
    //change history url only
    await this.props.history.replace("/detail-produk/" + id);
    //get param from url
    this.props.getListProductsById(id);
  };
  render() {
    // const splitlisttest = splitArray(divRowContent, 4);
    const splitArray = (array, size) => {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);
      return [head, ...splitArray(tail, size)];
    };

    // const { listProducts, isLoading } = this.props.dataproducts;
    const listProducts = this.props.dataproducts.listProducts;

    const listProductsImg = listProducts.filter((item) => {
      if (item.gambar !== null) {
        return item;
      }
      return false;
    });
    const splitlisttest = splitArray(listProductsImg, 4);
    return (
      <div className="">
        <Header />

        <div className="mx-3">
          <Carousel />
          <SlideBar
            getProductsCategory={(categoryName) =>
              this.handleRequestCategoryProducts(categoryName)
            }
            {...this.props}
          />
        </div>
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-sm-6">
              <Carousel1 />
            </div>
            <div className="col-sm-6">
              <CardBrand />
            </div>
          </div>
        </div>

        <div className="container">
          {splitlisttest.map((baris) => (
            <div className="row">
              {baris.map((item, value) => (
                <div className="col-sm-3 mt-2 ">
                  <CardProduct
                    // handleRequestByIdProducts={handleRequestByIdProducts}
                    id={item.id}
                    nama={item.nama}
                    harga={item.harga}
                    gambar={item.gambar}
                    listProducts={item.listProducts}
                    getProductsById={(id) => this.handleRequestByIdProducts(id)}
                    {...this.props}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getListProducts,
  getListProductsCategory,
  getListProductsById,
};

const mapStateToProps = (state) => {
  return {
    dataproducts: state.product,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

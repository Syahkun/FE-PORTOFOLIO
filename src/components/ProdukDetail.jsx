import React from "react";
import CarouselProduk from "../components/CarouselProduk";
import Deskripsi from "../components/DeskripsiProduk";

const ProdukDetail = () => {
  return (
    <div className="container-deskripsi ">
      <div className="row">
        <div className="col-sm-5">
          <CarouselProduk />
        </div>
        <div className="col-sm-7">
          <Deskripsi />
        </div>
      </div>
    </div>
  );
};

export default ProdukDetail;

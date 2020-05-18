import React from "react";
import { Link } from "react-router-dom";

const slideBar = (props) => {
  // function to change router by category products
  const changeRouter = async (category) => {
    if (props.getProductsCategory) {
      props.getProductsCategory(category);
    } else {
      //redirect pages to endpoint produtcs-category
      await props.history.replace("/" + category);
    }
  };
  return (
    <div className="">
      <div className="icon-bar ">
        <p className="home-icon" href="#">
          <i className="fa fa-home"></i>
        </p>
        <p href="#">
          {" "}
          <Link to="/laptop">
            <i
              value={4}
              className="fa fa-laptop"
              onClick={() => changeRouter(4)}
            ></i>
          </Link>
        </p>
        <p>
          <Link to="/televisi">
            <i
              value={3}
              className="fa fa-television"
              onClick={() => changeRouter(3)}
            ></i>
          </Link>
        </p>
        <p href="#">
          <Link to="/headset">
            <i
              value={5}
              className="fa fa-headphones"
              onClick={() => changeRouter(5)}
            ></i>
          </Link>
        </p>
        <p href="#">
          {" "}
          <Link to="/headphone">
            <i
              value={6}
              className="fa  fa-mobile "
              onClick={() => changeRouter(6)}
            ></i>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default slideBar;

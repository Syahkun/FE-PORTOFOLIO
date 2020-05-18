import React, { Component } from "react";
import PostProductForm from "../components/FormPostProduct";

class PostProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <PostProductForm />
        </div>
      </React.Fragment>
    );
  }
}

export default PostProduct;

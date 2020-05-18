import React from "react";

const CardBrand = () => {
  return (
    <div className="">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4 ">
          <div class="card one-edge-shadow ">
            <img
              src={require("../images/logo-apple.jpg")}
              class="card-img-top"
              alt="..."
            />
            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div> */}
          </div>
        </div>
        <div class="col mb-4">
          <div class="card one-edge-shadow">
            <img
              src={require("../images/samsung-logo2.gif")}
              class="card-img-top"
              alt="..."
            />
            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div> */}
          </div>
        </div>
        <div class="col mb-4">
          <div class="card one-edge-shadow">
            <img
              src={require("../images/logo-lenovo.jpg")}
              class="card-img-top"
              alt="..."
            />
            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div> */}
          </div>
        </div>
        <div class="col mb-4">
          <div class="card one-edge-shadow">
            <img
              src={require("../images/oppo-logo.png")}
              class="card-img-top"
              alt="..."
            />
            {/* <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBrand;

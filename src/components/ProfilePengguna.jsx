import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProfilePengguna = (props) => {
  console.warn("cek props profil", props);
  const nama = localStorage.getItem("namaPenjual");
  const email = localStorage.getItem("emailPenjual");
  const provinsi = localStorage.getItem("inputProvinsiPenjual");
  const kota = localStorage.getItem("kotaPenjual");
  const kodePos = localStorage.getItem("kotaPosPenjual");
  // const kotaType = localStorage.getItem("kotaTypePenjual");
  const jalan = localStorage.getItem("jalanPenjual");
  const noHp = localStorage.getItem("noHpPenjual");
  const status = localStorage.getItem("status");
  // const akunBank = localStorage.getItem("akunBankPenjual");
  return (
    <body className="bg-profile">
      <div className="bg-profile-2">
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://statics.sportskeeda.com/wp-content/uploads/2016/11/the-rock-600x400-1479050540-800.jpg"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  {/* <h5>Kshiti Ghelani</h5> */}
                  <Link to="/">
                    <h3 className="">Back to Home</h3>
                  </Link>
                  <p className="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                {status === "penjual" ? (
                  <button className="profile-edit-btn">
                    <Link to="/daftar-penjual">Edit Profile</Link>
                  </button>
                ) : (
                  <button className="profile-edit-btn">
                    <Link to="/daftar-pembeli">Edit Profile</Link>
                  </button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Manage your store</p>
                  {/* <Link to="/postproduk">
                    <button className="profile-edit-btn">Post Product</button>
                  </Link> */}
                  <br />

                  <br />
                  <p>History your record</p>
                  {/* <button className="profile-edit-btn">
                    <Link to="/post-produk">Delete Product</Link>
                  </button> */}
                  {/* <br />
                  <a href="">Corono Stay at Home</a>
                  <br />
                  <a href="">What your feedback?</a>
                  <br />
                  <a href="">We support you</a>
                  <br /> */}
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p> {nama} </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p> {email} </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>
                          {jalan},&nbsp; {kota},&nbsp; {provinsi},&nbsp;{" "}
                          {kodePos}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{noHp}</p>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-6">
                        <label>Bank account</label>
                      </div>
                      <div className="col-md-6">
                        <p>{akunBank}</p>
                      </div>
                    </div> */}
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div> */}

                  <Link to="/postproduk">
                    <button
                      className="like btn btn-default mr-2 mt-4"
                      type="button"
                    >
                      Post Your Product
                    </button>
                  </Link>
                  <Link to="/postproduk">
                    <button
                      className="like btn btn-default mr-2 mt-4"
                      type="button"
                    >
                      Manage Your Store
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

export default connect(mapStateToProps)(ProfilePengguna);

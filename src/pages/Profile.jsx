import React, { Component } from "react";
import { connect } from "react-redux";
import { getPenjual } from "../store/actions/userAction";
import ProfileComp from "../components/ProfilePengguna";
class Profile extends Component {
  componentDidMount = async () => {
    await this.props.getPenjual();
  };
  render() {
    return (
      <React.Fragment>
        <div className="bg-profile">
          <ProfileComp />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

const mapDispatchToProps = {
  getPenjual,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

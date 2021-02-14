import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./actions/authActions";
import Student from "./studentPage";
import Staff from "./staffPage";
import Admin from "./adminPage";
import Parent from "./parentPage";
import { Button } from "semantic-ui-react";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  chooseComponent(user) {
    let role = user.userRole;
    if (role === "student") {
      return <Student name={user.name} onLogoutClick={this.onLogoutClick} />;
    } else if (role === "staff") {
      return <Staff name={user.name} onLogoutClick={this.onLogoutClick} />;
    } else if (role === "admin") {
      return <Admin name={user.name} onLogoutClick={this.onLogoutClick} />;
    } else {
      return <Parent name={user.name} onLogoutClick={this.onLogoutClick} />;
    }
  }
  render() {
    const { user } = this.props.auth;
    console.log(this.props);
    return user && user.name ? this.chooseComponent(user) : <></>;
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);

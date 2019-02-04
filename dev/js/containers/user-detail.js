import React, { Component } from "react";
import { connect } from "react-redux";

import ReactTooltip from "react-tooltip";

//1-component-container-data render class
class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <p>Select a user...</p>;
    }
    return (
      <div>
        <ReactTooltip />
        <img
          src={this.props.user.thumbnail}
          data-tip="whatsUp"
          data-type="success"         
          data-place="bottom"
          data-effect="solid"
          data-delay-hide="1000"
        />

        <p
          data-tip="This tip is the full name"
          data-place="bottom"
          data-effect="float"
          data-scroll-hide="true"
        >
          Full Name: {this.props.user.firstName} {this.props.user.lastName}
        </p>

        <p 
        data-tip="This is the profil"
        data-place="bottom"
        data-delay-show="1000">
          Profil: {this.props.user.description}
        </p>

        <p>Age: {this.props.user.age}</p>
      </div>
    );
  }
}

//2-activeUser is created in index-reducers for mappingStateProps
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

//3-send the connection mappingState of this class
export default connect(mapStateToProps)(UserDetail);

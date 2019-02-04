//1-the container will connect data-store to component for customers
import React, { Component } from "react";
//bind~lien~connection-actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";


//data-tip data-for="completName"

//2-current class component
class UserList extends Component {
  //the map object will access props for each treat-as-one-user-item in the array-users
  //to create a list of the user-collection:
  //add an unique-key everytime you create a list of items.

  //onclick use imported selectUser from actions index
  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}
       
        >
          {user.firstName} {user.lastName}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

//3-function 1:this map the props created in index-reducers
function mapStateToProps(state) {
  return {
    users: state.users
  };
}

//4-Function 2: Must dispatch the index-action created
//dispatch is a parameter useful by redux behind the scene
// to call the function {jsx-props:argValue}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectUser: selectUser },

    dispatch
  );
}

//5- Smart connection for this both current functions to be expor{ted to the dOM.
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(UserList);

//userList will be exported to the main layout

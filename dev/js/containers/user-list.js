
//the container will connect data-store to component for customers
import React, {Component} from 'react';
//bind~lien~connection-actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectUser} from '../actions/index';

class UserList extends Component {

    //the map object will access props for each treat-as-one-user-item in the array-users
    //to create a list of the user-collection:
    //add an unique-key everytime you create a list of items.
    createListItems(){
        return this.props.users.map((user) => {
            return(
                <li key={user.id}
                  onClick={() => this.props.selectUser(user)}
                >
                 {user.firstName} {user.lastName}
                </li>
            );
        });
       
    }
  
    render() { 
        return ( 
        <ul>
            {this.createListItems()}

        </ul> );
    }
}

function mapStateToProps(state) {
    return{
        users:state.users
    };
}

//dispatch is a parameter useful by redux behind the scene
// to call the function selectUser{jsx-props:argValue}
function matchDispatchToProps(dispatch){
return bindActionCreators({selectUser:selectUser}, dispatch)
}
//smart connection to be expor{ted to the dOM.
export default connect(mapStateToProps,matchDispatchToProps)(UserList) ;


//userList will be exported to the main layout
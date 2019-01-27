import React, { Component } from 'react';
import {connect} from 'react-redux';


//1-component-container-data render class
class UserDetail extends Component {
   
    render() { 
        if(!this.props.user){
            return(<p>Select a user...</p>)
        }
        return ( 
            <div>
                <img src={this.props.user.thumbnail} />
                <br />
               
                Full Name: {this.props.user.firstName}  {this.props.user.lastName} 
                <br />
                Profil: {this.props.user.description} 
                <br />
                Age: {this.props.user.age} 

              
            </div>
        );
    }
}

//2-activeUser is created in index-reducers for mappingStateProps
function mapStateToProps(state) {
    return{
        user:state.activeUser
    };
}
//3-send the connection mappingState of this class
export default connect (mapStateToProps)(UserDetail);



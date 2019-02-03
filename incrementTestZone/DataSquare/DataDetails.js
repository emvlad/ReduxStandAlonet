import React, { Component } from 'react';
import {connect} from 'react-redux';

class DataDetails extends Component {
    render() {
        if(!this.props.data){
            return(<p>Select data...</p>)
        }
        return (
            <div>

                Field1: {this.props.data.field1}
                <br />
                Field2: {this.props.data.field2}
                <br />
                Field3: {this.props.data.field3}


            </div>
        );
    }


}

//2-activeData is created in index-reducers for mappingStateProps
function mapStateToProps(state) {
    return{
        data:state.activeData
    };
}
//3-send the connection mappingState of this class
export default connect (mapStateToProps)(DataDetails);

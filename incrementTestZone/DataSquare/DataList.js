import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectData} from '../../../../actions/data';

class DataList extends Component {


    //test create data-listing
    //add multilanguage to field
    createListDatas() {
        return this.props.datas.map(data => {
          return (
            <li key={data.id} onClick={() => this.props.selectData(user)}>
              {data.filed1} {data.field2}
            </li>
          );
        });
      }
render() {
    return (

    <ul>
        {this.createListDatas()}

    </ul> );


}
}

function mapStateToProps(state) {
return{
    datas:state.datas
};
}


function matchDispatchToProps(dispatch){
return bindActionCreators({selectData:selectData}, dispatch)
}

export default connect(mapStateToProps)(DataList) ;

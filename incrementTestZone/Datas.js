import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Col } from 'react-bootstrap'
import '../../UI/css/Bootstrap.css'
import '../../UI/css/FontAwesome.css'
import '../../PagePrincipale/PagePrincipale.css'


import {selectData} from '../../../actions/data';

import './Datas.css'
import traduction from '../../../utils/langue.json'
import '../../UI/css/Bootstrap.css'



class Datas extends Component {

  constructor(props) {
    super(props)
    this.handleSelection = this.handleSelection.bind(this)
}

handleSelection() {
  if(this.props.onClick) {
      this.props.onClick()
  }

}

  willHandleData() {
    return(
      <div className="Page_Title_Description" > This block must handle data-ON-click - like a DataButton </div>
    )
  }

titleAndDescripion() {
  return(
    <div className="Page_Title_Description">
      <h2>{traduction['dataPagTitle'][this.props.langue] }</h2>

      <p> {traduction['dataPagDesc'][this.props.langue] }</p>
    </div>
  )
}

//styling button page page

  render() {

    return (
     <Col xs={12}
        md={4}
        className='PageData__Tuile'

        style={{ height: (this.props.hauteur) + 'px' }}>

       <div >
       { this.titleAndDescripion()}
          <h4 >{this.willHandleData()} </h4>

        </div>
      </Col>


    )
  }
}

function mapStateToProps(state) {
  return {
      langue:state.langue,
      datas:state.datas

  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {selectData:selectData},
    dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps) (Datas)

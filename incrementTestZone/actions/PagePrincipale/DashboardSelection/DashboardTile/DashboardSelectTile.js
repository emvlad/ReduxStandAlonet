/**
* @file Component to represent a Dashboard in the selection page
* @author Jean-Pascal McGee
* @copyright Intelligence Industrielle 2018
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Col } from 'react-bootstrap'

import { dashboardSelect,chargementTuiles } from '../../../../actions/dashboardselect'

import fctUtils from '../../../../utils/index'
import './DashboardTile.css'
const { checkStatus, parseJSON } = fctUtils

/**
 * Create a Dashboard tile to show on the selection component and select the dashboard to diplay
 *
 * @class DashboardTile
 * @extends {Component}
 */
class DashboardSelectTile extends Component {
    constructor(props) {
        super(props)
        this.handleSelection = this.handleSelection.bind(this)

    }
    handleSelection() {
        this.props.dashboardSelect(this.props.idx)
    }

    render () {
        return (
            <Col
                xs={12}
                md={4}
                className='PagePrincipale__Tuile'
                style={{ height: (this.props.hauteur) + 'px' }}
                >

                <div className='PagePrincipale__Tuile__Contenu' onClick={ this.handleSelection }>
                    <h4 className='PagePrincipale__Tuile__Contenu__Titre'>{ this.props.titre }
                        {" "}
                    </h4>
                    <p>{ this.props.description }</p>
                </div>


            </Col>
        )


    }
}


function mapStateToProps(state) {
    return {
        connexion: state.connexion.connexion
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
        dashboardSelect,
        chargementTuiles

    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(DashboardSelectTile)

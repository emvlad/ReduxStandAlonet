import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import TuilePagePrincipale from './TuilePagePrincipale/TuilePagePrincipale'
import MenuSuperieur from './MenuSuperieur/MenuSuperieur'
import Workspace from './Workspace/Workspace'
import Utilisateurs from './Utilisateurs/Utilisateurs'
import IFrame from './IFrame/IFrame'
import DashboardSelection from './DashboardSelection/DashboardSelection'

import DashboardSelect from './DashboardSelection/DashboardSelect'
import { dashboardSelect, } from '../../actions/dashboardselect'

import { chargementDashboards } from '../../actions/dashboard'
import { chargementUtilisateurs } from '../../actions/utilisateurs'
import { selectionMenuPrincipal, } from '../../actions/menuPrincipal'

import { dashboardSelection } from '../../actions/dashboard'

import fctUtils from '../../utils/index'

import traduction from '../../utils/langue.json'

import '../UI/css/Bootstrap.css'
import './PagePrincipale.css'

const { checkStatus, parseJSON } = fctUtils

class PagePrincipale extends Component {
    constructor(props) {
        super(props)

        this.actualiserDimensions = this.actualiserDimensions.bind(this)
        this.fetchDashboards = this.fetchDashboards.bind(this)
        this.fetchDashboards = this.fetchDashboards.bind(this)

        this.fetchDashboards()
    }

    fetchDashboards() {
        const headers = new Headers()
        headers.append("token", this.props.connexion.token)
        fetch(`/api/dashboards/`, {
            method: 'get',
            accept: "application/json",
            headers
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(resp => {
            if(resp.dashboards) {
                this.props.chargementDashboards(resp.dashboards)
            }
        })
    }

    componentWillMount() {
        const token = localStorage.getItem('token')
        const headers = new Headers()
        headers.append('token', token)

        this.actualiserDimensions()

        // fetch(`/api/users/get`, {
        //     method: 'post',
        //     accept: 'application/json',
        //     headers
        // })
        // .then(checkStatus)
        // .then(parseJSON)
        // .then(resp => this.props.chargementUtilisateurs(resp.users))
    }

    componentDidMount() {
        window.addEventListener("resize", this.actualiserDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.actualiserDimensions)
    }

    actualiserDimensions() {
        const hauteurFenetre = window.innerHeight - 50
        const hauteurTuile = hauteurFenetre / 3
        this.setState({
            hauteurTuile: Math.max(200, hauteurTuile)
        })
    }

    render () {
        let contenuPage
        switch(this.props.pagePrincipale) {
            case 'tableauxdebord':
               // contenuPage = <DashboardSelection isEditable={false} />
              contenuPage = <DashboardSelect isEditable={false} />

                break
            case 'configuration':
                contenuPage = <Workspace />
                break
            case 'utilisateurs':
                contenuPage = <Utilisateurs />
                break
            case 'rapport':
                contenuPage = <IFrame url="https://demo3.intelligenceindustrielle.com/rapport"/>
                break
            case 'help':
                contenuPage = <IFrame url="https://demo3.intelligenceindustrielle.com/test-sms"/>
                break
            case 'layout':
                contenuPage = <IFrame url="https://demo3.intelligenceindustrielle.com/layout"/>
                break
            case 'documentation':
                contenuPage = <IFrame url="https://demo3.intelligenceindustrielle.com/documents"/>
                break
            case 'dashboardSelection' :
                contenuPage = <DashboardSelection />
                break
            case null:
            default:
                this.props.selectionMenuPrincipal(null)
                this.props.dashboardSelection(null)

                contenuPage = (
                    <Grid fluid={ true }>
                        <Row className='show-grid'>
                            <TuilePagePrincipale
                                idx={ 'tableauxdebord' }
                                hauteur={ this.state.hauteurTuile }
                                titre={traduction['tableaudebord'][this.props.langue] }
                                logo={ 'table' }
                                description=  {traduction['visualRealTimePerform'][this.props.langue] }
                            />
                            <TuilePagePrincipale
                                idx={ 'configuration' }
                                hauteur={ this.state.hauteurTuile }

                                titre={traduction['parametres'][this.props.langue] }
                                logo={ 'cog' }
                                description={traduction['sysConfigDetails'][this.props.langue] }
                            />
                            <TuilePagePrincipale
                                idx={ 'utilisateurs' }
                                hauteur={ this.state.hauteurTuile }
                                titre={traduction['userTitles'][this.props.langue] }
                                logo={ 'users' }


                                description= {traduction['managUserAccess'][this.props.langue] }
                            />
                        </Row>
                        <Row className="show-grid">
                            <TuilePagePrincipale
                                idx={ 'rapport' }
                                titre={traduction['reports'][this.props.langue] }
                                logo={ 'clipboard' }

                                description={traduction['reportDetails'][this.props.langue] }
                                hauteur={ this.state.hauteurTuile }
                            />
                            <TuilePagePrincipale
                                idx={ 'help' }
                                titre={ 'S.O.S.' }
                                logo={ 'warning' }

                                description={traduction['askHelps'][this.props.langue] }

                                hauteur={ this.state.hauteurTuile }
                            />
                            <TuilePagePrincipale
                                idx={ 'layout' }
                                titre={traduction['highViewTitle'][this.props.langue] }
                                logo={ 'desktop' }

                                description={traduction['highViews'][this.props.langue] }
                                hauteur={ this.state.hauteurTuile }
                            />
                        </Row>
                        <Row className="show-grid">
                            <TuilePagePrincipale
                                idx={ 'documentation' }
                                titre={traduction['docTitle'][this.props.langue] }
                                logo={ 'file' }
                                description={traduction['showDocs'][this.props.langue] }
                                hauteur={ this.state.hauteurTuile }
                            />
                            <TuilePagePrincipale
                                idx={ '' }
                                hauteur={ this.state.hauteurTuile }
                            />
                            <TuilePagePrincipale
                                idx={ '' }
                                hauteur={ this.state.hauteurTuile }
                            />
                        </Row>
                    </Grid>
                )
        }
        return (
            <div className='PagePrincipale'>
                <MenuSuperieur />
                { contenuPage }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        langue:state.langue,
        pagePrincipale: state.pagePrincipale.pagePrincipale,
        connexion: state.connexion.connexion
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        chargementUtilisateurs,
        chargementDashboards,
        selectionMenuPrincipal,
        dashboardSelection,
        dashboardSelect
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PagePrincipale)

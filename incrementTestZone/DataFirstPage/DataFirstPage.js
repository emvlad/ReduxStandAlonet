import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Row } from 'react-bootstrap'

import DataTile from './DataTile/DataTile'


//import { selectionFirstPageData, } from '../../../actions/dataFirstPage'
import fctUtils from '../../../utils/index'
import Dashboard from '../Dashboards/Dashboards';
import CreateDashboardForm from '../DashboardSelection/CreateDashboardForm/CreateDashboardForm'


import '../../UI/css/Bootstrap.css'
import './DataFirstPage.css'
import traduction from '../../../utils/langue.json'



//const { checkStatus, parseJSON } = fctUtils

class DataFirstPage extends Component {
    constructor(props) {
        super(props)

        const maxNbOfColumns = 3
        const allDashboards = this.props.dashboards
        const nbOfColums = Math.min(allDashboards.length, maxNbOfColumns)
        const nbOfRows = Math.ceil(allDashboards.length / maxNbOfColumns) // because there is maxNbOfColumns sensor for each row
        const rows = this.array_chunks(allDashboards,nbOfColums)

        this.state = {
            rows: rows,
            nbOfRows: nbOfRows,
            nbOfColums: nbOfColums,
            maxNbOfColumns: maxNbOfColumns,
            displayModale: false,
            parameters: null,
        }

        this.createDashboard = this.createDashboard.bind(this)
        this.handleModification = this.handleModification.bind(this)
        this.handleCloseModale = this.handleCloseModale.bind(this)
        this.actualiserDimensions = this.actualiserDimensions.bind(this)
        this.selectionPage = this.selectionPage.bind(this)
    }

    actualiserDimensions() {
        const hauteurFenetre = window.innerHeight - 50 - 80
        const hauteurTuile = hauteurFenetre / this.state.nbOfRows
        return Math.max(200, hauteurTuile)
    }

    array_chunks = (array, chunk_size) => {
        return Array(Math.ceil(array.length / chunk_size))
        .fill().map((_, index) => index * chunk_size)
        .map(begin => array.slice(begin, begin + chunk_size))
    }


     //administrator only - will turn to true
    createDashboard() {
        this.setState({
            displayModale: false
        })
    }

    //administrator only - will turn to true
    handleModification(params) {
        this.setState({
            parameters: params,
            displayModale:false
        })
    }

    handleCloseModale() {
        this.setState({
            parameters: null,
            displayModale: false
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.actualiserDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.actualiserDimensions)
    }

    componentWillReceiveProps(nextProps) {
        const allDashboards = nextProps.dashboards
        const nbOfColums = Math.min(allDashboards.length, this.state.maxNbOfColumns)
        const nbOfRows = Math.ceil(allDashboards.length / this.state.maxNbOfColumns) // because there is maxNbOfColumns sensor for each row
        const rows = this.array_chunks(allDashboards,nbOfColums)

        this.setState({
            rows: rows,
            nbOfRows: nbOfRows
        })
    }

    titleAndDescripion() {
        return(
            <div className="Page_Title_Description">

              <h2>{traduction['datazone'][this.props.langue] } </h2>
              <p> {traduction['dataPagDesc'][this.props.langue]}</p>

            </div>
        )
    }


    selectionPage() {
        const hauteurTuile = this.actualiserDimensions()
        const rowsElement = this.state.rows.map( (row,index) => {
            const columnElements = row.map((col,index) => {
                return(
                    <DataTile
                        key={ index }
                        idx={ col.id }
                        titre={ col.name }
                        description={ col.description }
                        hauteur={ hauteurTuile }
                        onClick={ this.handleSensorSelection }

                        //administrator only
                      onClickModification={ this.handleModification }
                    />
                )
            })

            return(
                <Row key={index} className='show-grid'>
                    { columnElements }

                </Row>
            )
        })

        return(
            <div className="SensorSelection">
                { this.titleAndDescripion() }
                <Grid fluid={ true }>
                    {rowsElement}
                </Grid>
            </div>
        )
    }


    render () {

        let inputPage = this.selectionPage()

        if(this.props.selectedDashboard) {
            inputPage = <Dashboard id={this.props.selectedDashboard} isEditable={this.props.isEditable} />
        }
        return (

                <div className="PagePrincipale">

                    { inputPage }

                    {/* <CreateDashboardForm
                    show={ this.state.displayModale }
                    onHide={ this.handleCloseModale }
                    dashboardParameters={this.state.parameters}
                /> */}

                </div>

        )


    }
}





function mapStateToProps(state) {
    return {
        connexion: state.connexion.connexion,
        dashboards: state.dashboard.dashboard,
        selectedDashboard: state.dashboard.selectedDashboard,
        langue: state.langue
    }
}

export default connect(mapStateToProps, null)(DataFirstPage)

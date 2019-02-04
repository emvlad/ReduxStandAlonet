const dashboardSelect = dashboardid => {
    return {
        type: 'SELECT_DASHBOARD',
        payload: dashboardid
    }
}

const chargementTuiles = layout => {
    return {
        type: 'CHARGEMENT_TUILES',
        payload: layout
    }
}



export {
    dashboardSelect,
    chargementTuiles,

}

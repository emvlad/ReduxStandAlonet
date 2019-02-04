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

/*  const chargementDashboards = dashboards => {
    return {
        type: 'CHARGEMENT_DASHBOARDS',
        payload: dashboards
    }
} */
/* const editingDashboard = dashboard => {
    return {
        type: 'EDITING_DASHBOARD',
        payload: dashboard
    }
}

const addingDashboard = dashboard => {
    return {
        type: 'ADDING_DASHBOARD',
        payload: dashboard
    }
}

const removingDashboard = dashboard => {
    return {
        type: 'REMOVING_DASHBOARD',
        payload: dashboard
    }
} */


/*
const ajoutTuile = tuiles => {
    const nouvelleTuile = {
        i: creerIdTuile(),
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        minW: 2,
        minH: 2
    }
    const tuilesActualisees = tuiles.concat([ nouvelleTuile ])

    return {
        type: 'AJOUT_TUILE',
        payload: tuilesActualisees
    }
}

const changementTuiles = nouveauLayout => {
    return {
        type: 'CHANGEMENT_TUILES',
        payload: nouveauLayout
    }
}

const selectionTuileAModifier = idTuile => {
    return {
        type: 'SELECTION_TUILE_AMODIFIER',
        payload: idTuile
    }
}
 */
/* const modificationTuile = tuiles => {
    console.log(tuiles)
    return {
        type: 'MODIFICATION_TUILE',
        payload: tuiles
    }
}
 */
/* const suppressionTuile = idTuile => {
    return {
        type: 'SUPPRESSION_TUILE',
        payload: idTuile
    }
} */

/* FONCTIONS QUI NE SONT PAS DES ACTIONS */
/* const creerIdTuile = () => {
    let text = Date.now().toString()
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
} */

export {
    dashboardSelect,
    chargementTuiles,
   /* addingDashboard,
   chargementDashboards,
    editingDashboard,
    removingDashboard,
    suppressionTuile,
    ajoutTuile,
    changementTuiles,
    selectionTuileAModifier,
    modificationTuile
    */

}

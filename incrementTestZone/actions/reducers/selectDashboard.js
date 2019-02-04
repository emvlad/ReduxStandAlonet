export default function (state = null, action) {
    switch (action.type) {
        case 'SELECT_DASHBOARD':
            return action.payload

        case 'CHARGEMENT_DASHBOARDS':
            return action.payload

        case 'CHARGEMENT_TUILES':
            return action.payload
        default:
            return state
    }
}

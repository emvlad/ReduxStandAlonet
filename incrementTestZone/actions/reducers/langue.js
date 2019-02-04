export default function (state = 'fr', action) {
    switch (action.type) {
        case 'CHANGEMENT_LANGUE':
            return action.payload
        default:
            return state
    }
}

import { combineReducers } from 'redux'
import dashboard from './dashboard'
import selectedDashboard from './selectedDashboard'
import tuiles from './tuiles'
import tuileAModifier from './tuileAModifier'
import areaGraph from './areaGraph'

import selectDashboard from './selectDashboard'

const reducersDashboard = combineReducers({
    dashboard,
    selectedDashboard,
    tuiles,
    tuileAModifier,
    areaGraph,
    selectDashboard
});

export default reducersDashboard

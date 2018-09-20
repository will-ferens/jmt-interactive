import { combineReducers } from 'redux'

import mapState from './mapState'
import selectedFeature from './selectedFeature'

const rootReducer = combineReducers({
    mapState,
    selectedFeature
})

export default rootReducer
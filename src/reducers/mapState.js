import { setMapStateActions } from '../constants/action_constants'

const initialState = {
    center: [-118.9225380061228, 37.41019343669283],
    zoom: [ 9 ],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case setMapStateActions.SET_MAP:
            return {
                ...state,
                center: action.payload,
                zoom: [ 11 ]
            }
        
        default:
            return state
    }
}


import { setMapStateActions } from '../constants/action_constants'

const initialState = {
    center: [-119.57305556, 37.73944444],
    zoom: [ 10 ],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case setMapStateActions.SET_MAP:
            return {
                ...state,
                center: action.payload,
                zoom: [ 10 ]
            }
        
        default:
            return state
    }
}


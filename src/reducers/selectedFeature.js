import { selectFeatureActions } from '../constants/action_constants'

const intitialState = {
    pictureURL: null,
    location: null
}

export default function(state = intitialState, action ) {
    switch(action.type) {
        case selectFeatureActions.SELECT_FEATURE:
            return {
                ...state,
                pictureURL: action.payload.picture,
                location: action.payload.title
            }
            default: 
                return state
    }
}
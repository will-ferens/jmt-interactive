import { setMapStateActions } from '../constants/action_constants'

export function setMapState(mapSettings) {
    return {
        type: setMapStateActions.SET_MAP,
        payload: mapSettings
    }
}
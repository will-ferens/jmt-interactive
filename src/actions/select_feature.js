import { selectFeatureActions } from '../constants/action_constants'

export function selectFeature(feature) {

    return {
        type: selectFeatureActions.SELECT_FEATURE,
        payload: feature
    }
}
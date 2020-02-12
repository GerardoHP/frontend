import { getLocations } from "../../utils/api";
import * as types from './actionTypes';

export function loadLocations() {
    return function (dispatch) {
        return getLocations({}).then(response => {
            dispatch(loadLocationsSuccess(response.data));
        }).catch(error => { throw error; })
    }
}

function loadLocationsSuccess(locations) {
    return { locations, type: types.LOAD_LOCATIONS_SUCCESS }
}
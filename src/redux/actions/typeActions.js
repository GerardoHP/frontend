import { getTypes } from "../../utils/api";
import * as actionTypes from './actionTypes';

export function loadTypes() {
    return function (dispatch) {
        return getTypes().then(response => {
            dispatch(loadTypesSuccess(response.data));
        }).catch(error => { throw error; })
    }
}

function loadTypesSuccess(types) {
    return { types, type: actionTypes.LOAD_TYPES_SUCCESS }
}
import { getBaths } from "../../utils/api";
import * as types from './actionTypes';

export function loadBaths() {
    return function (dispatch) {
        return getBaths().then(response => {
            dispatch(loadBathsSuccess(response.data));
        }).catch(error => { throw error; })
    }
}

function loadBathsSuccess(baths) {
    return { baths, type: types.LOAD_BATHS_SUCCESS }
}
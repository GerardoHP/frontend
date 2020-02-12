import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function bathReducer(state = initialState.baths, action) {
    switch (action.type) {
        case types.LOAD_BATHS_SUCCESS:
            return action.baths;
        default:
            return state;
    }
}
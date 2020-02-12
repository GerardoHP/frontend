import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function typeReducer(state = initialState.types, action) {
    switch (action.type) {
        case types.LOAD_TYPES_SUCCESS:
            return action.types;
        default:
            return state;
    }
}
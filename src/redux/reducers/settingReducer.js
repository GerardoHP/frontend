import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function typeReducer(state = initialState.settings, action) {
    switch (action.type) {
        case types.SET_SETTING_SUCCESS:
            return { ...state, ...action.setting }
        default:
            return state;
    }
}
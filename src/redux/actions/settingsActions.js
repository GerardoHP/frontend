import * as types from './actionTypes';

export function loadSettings() {
    return { type: types.LOAD_SETTINGS_SUCCESS }
}

export function setSetting(setting) {
    return { setting, type: types.SET_SETTING_SUCCESS }
}

//ToDo: add some settings UI.
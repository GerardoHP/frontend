import { combineReducers } from 'redux';
import locations from './locationReducer';
import baths from './bathReducer';
import types from './typeReducer';
import settings from './settingReducer';


const rootReducer = combineReducers({ locations, baths, types, settings });

export default rootReducer;
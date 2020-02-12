import { combineReducers } from 'redux';
import locations from './locationReducer';
import baths from './bathReducer';
import types from './typeReducer';


const rootReducer = combineReducers({ locations, baths, types });

export default rootReducer;
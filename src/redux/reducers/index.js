import { combineReducers } from 'redux';
import popReducer from './popReducer';

const rootReducer = combineReducers({ popReducer });

export default rootReducer;

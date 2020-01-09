import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({ themes: themeReducer, tab: tabReducer });

export default rootReducer;

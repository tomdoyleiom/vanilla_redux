import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import tabReducer from './tabReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  themes: themeReducer,
  tab: tabReducer,
  menu: menuReducer,
});

export default rootReducer;

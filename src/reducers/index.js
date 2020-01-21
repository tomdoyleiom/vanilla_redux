import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import satelliteReducer from './satelliteReducer';
import tabReducer from './tabReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  themes: themeReducer,
  tab: tabReducer,
  menu: menuReducer,
  satellites: satelliteReducer,
});

export default rootReducer;

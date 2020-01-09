import { createAction } from 'redux-actions';

const getThemes = createAction('GET_THEMES');
const addTheme = createAction('ADD_THEME');
const clearThemes = createAction('CLEAR_THEMES');
const selectTheme = createAction('SELECT_THEME');

const ThemeActions = {
  getThemes,
  addTheme,
  clearThemes,
  selectTheme,
};

export default ThemeActions;

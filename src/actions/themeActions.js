import { createAction } from 'redux-actions';

const addTheme = createAction('ADD_THEME');
const addThemes = createAction('ADD_THEMES');
const clearThemes = createAction('CLEAR_THEMES');
const selectTheme = createAction('SELECT_THEME');


function fetchThemes() {
  // fetch the themes
  return fetch(`${process.env.API}/themes`);
}

function getThemesAsync() {
  return async (dispatch) => fetchThemes().then(
    async (response) => dispatch(addThemes(await response.json())),
    () => dispatch(clearThemes()),
  );
}

const ThemeActions = {
  addTheme,
  clearThemes,
  selectTheme,
  getThemesAsync,
};

export default ThemeActions;

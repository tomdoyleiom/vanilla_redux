import { createAction } from 'redux-actions';

const addCategories = createAction('ADD_CATEGORIES');
const clearCategories = createAction('CLEAR_CATEGORIES');

function fetchSatelliteData() {
  return fetch(`${process.env.API}/satellites`);
}


function getSatelliteCategoriesAsync() {
  return async (dispatch) => fetchSatelliteData().then(
    async (response) => {
      dispatch(clearCategories());
      dispatch(addCategories(await response.json()));
    },
    () => dispatch(clearCategories()),
  );
}

const SatelliteActions = {
  addCategories,
  clearCategories,
  getSatelliteCategoriesAsync,
};

export default SatelliteActions;

import { createAction } from 'redux-actions';
import { SatelliteActionTypes } from '../actions/ActionTypes';

const addCategories = createAction(SatelliteActionTypes.ADD_CATEGORIES);
const clearCategories = createAction(SatelliteActionTypes.CLEAR_CATEGORIES);
const getSatelliteData = createAction(SatelliteActionTypes.GET_SATELLITES_DATA);
const clearSatelliteData = createAction(SatelliteActionTypes.CLEAR_SATELLITES_DATA_SATELLITES_DATA);
const displaySatellites = createAction(SatelliteActionTypes.DISPLAY_SATELLITES);

function fetchSatelliteData() {
  debugger
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

/**
 * TODO: Add get satellite data
 */
function getSatelliteDataAsync(){

}

/**
 * TODO: clear satallite data from arcGIS map view
 */


/**
 * display retrieved satellite data into arcGIS map view
 */

const SatelliteActions = {
  addCategories,
  clearCategories,
  getSatelliteCategoriesAsync,
};

export default SatelliteActions;

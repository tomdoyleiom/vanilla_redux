import satelliteActions from './satelliteActions';

/**
 * populates the application with all data it needs for initial load.
 */
function populateApplication() {
  return async (dispatch) => {
    debugger
    dispatch(satelliteActions.getSatelliteCategoriesAsync());
  };
}

const ApplicationActions = {
  populateApplication,
};


export default ApplicationActions;

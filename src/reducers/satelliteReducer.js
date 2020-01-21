import { SatelliteActionTypes } from '../actions/ActionTypes';

const defaultState = {
  categories: [],
  satelliteData: {}
};

export default function satelliteReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case SatelliteActionTypes.ADD_CATEGORIES:
      return { ...state, categories: [...action.payload] };
    case SatelliteActionTypes.CLEAR_CATEGORIES:
      return { ...state, categories: [] };
    case SatelliteActionTypes.GET_SATELLITES_DATA:
      return { ...state, satelliteData: action.payload };
    case SatelliteActionTypes.CLEAR_SATELLITES_DATA:
      return { ...state, satelliteData: {} };
    default:
      return state;
  }
}

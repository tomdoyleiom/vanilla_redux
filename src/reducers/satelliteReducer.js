const defaultState = {
  categories: [],
};

export default function satelliteReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return { ...state, categories: [...action.payload] };
    case 'CLEAR_CATEGORIES':
      return { ...state, categories: [] };
    default:
      return state;
  }
}

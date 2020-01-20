const defaultState = {
  selectedTab: 'SAT_TRACK',
  feedback: '',
};

export default function menuReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'SELECT_MENUITEM':
      debugger
      return { ...state, selectedTab: action.payload };
    case 'ADD_FEEDBACK':
      return state;
    default:
      return state;
  }
}

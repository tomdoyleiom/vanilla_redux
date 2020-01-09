export default function tabReducer(state = 'map', action) {
  switch (action.type) {
    case 'TAB_MAP':
      return 'map';
    case 'TAB_THEMES':
      return 'themes';
    case 'TAB_DETAILS':
      return 'details';
    default:
      return state;
  }
}

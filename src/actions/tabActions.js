import { createAction } from 'redux-actions';

const mapTab = createAction('TAB_MAP');
const themesTab = createAction('TAB_THEMES');
const detailsTab = createAction('TAB_DETAILS');

const TabActions = {
  mapTab,
  themesTab,
  detailsTab,
};

export default TabActions;

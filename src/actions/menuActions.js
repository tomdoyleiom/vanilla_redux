import { createAction } from 'redux-actions';

const selectMenuItem = createAction('SELECT_MENUITEM');
const addFeedback = createAction('ADD_FEEDBACK');

const menuActions = {
  addFeedback,
  selectMenuItem,
};

export default menuActions;

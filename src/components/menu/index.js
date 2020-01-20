import MenuActions from '../../actions/menuActions';
import store from '../../store';
import template from './menuTemplate';

function renderMenu() {
  // clear rendered html first
  const { selectMenuItem } = MenuActions;

  const locTemplate = template;
  const tabs = locTemplate.querySelectorAll('.tablinks');
  tabs[0].addEventListener('click', () => { store.dispatch(selectMenuItem('Satellite')); });
  tabs[1].addEventListener('click', () => { store.dispatch(selectMenuItem('ISS-Tracker')); });
  tabs[2].addEventListener('click', () => { store.dispatch(selectMenuItem('NextBike-Loc')); });
  tabs[3].addEventListener('click', () => { store.dispatch(selectMenuItem('CardiffPark-Poly')); });
  return template;
}
export default renderMenu;

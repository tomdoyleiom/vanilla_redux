import MenuActions from '../../actions/menuActions';
import bikePanel from './menuPanels/bikePanel';
import cardiffPanel from './menuPanels/cardiffPark';
import clear from '../../utilities/clear';
import html from '../../utilities/html';
import issPanel from './menuPanels/issPanel';
import satellitePanel from './menuPanels/satellitePanel';
import store from '../../store';
import template from './menuTemplate';

function renderPanel(panel) {
  return html(panel);
}

function renderMenu() {
  // clear rendered html first
  const { selectMenuItem } = MenuActions;
  const { menu } = store.getState();
  const locTemplate = template;
  const tabs = locTemplate.querySelectorAll('.tablinks');
  tabs[0].addEventListener('click', () => { store.dispatch(selectMenuItem('Satellite')); });
  tabs[1].addEventListener('click', () => { store.dispatch(selectMenuItem('ISS-Tracker')); });
  tabs[2].addEventListener('click', () => { store.dispatch(selectMenuItem('NextBike-Loc')); });
  tabs[3].addEventListener('click', () => { store.dispatch(selectMenuItem('CardiffPark-Poly')); });
  let panel = null;
  switch (menu.selectedTab) {
    case ('SAT_TRACK'):
      panel = renderPanel(satellitePanel);
      break;
    case ('ISS-Tracker'):
      panel = renderPanel(issPanel);
      break;
    case ('NextBike-Loc'):
      panel = renderPanel(bikePanel);
      break;
    case ('CardiffPark-Poly'):
      panel = renderPanel(cardiffPanel);
      break;
    default:
      panel = renderPanel(satellitePanel);
  }
  const panelContainer = locTemplate.querySelector('.panelContainer');
  clear(panelContainer);
  panelContainer.appendChild(panel);
  return locTemplate;
}


export default renderMenu;

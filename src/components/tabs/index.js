import Button from '../../models/Button';
import TabActions from '../../actions/tabActions';
import renderButton from '../button';
import store from '../../store';

function renderTabs(target = 'tabContainer') {
  const { tab } = store.getState();
  const tabsTemplate = document.createElement('div');

  const themesButton = new Button('themes', 'theme_button', () => {
    store.dispatch(TabActions.themesTab());
  });
  const mapButton = new Button('map', 'map_button', () => {
    store.dispatch(TabActions.mapTab());
  });
  const detailsButton = new Button('details', 'details_button', () => {
    store.dispatch(TabActions.detailsTab());
  });

  tabsTemplate.appendChild(renderButton(themesButton, tab === themesButton.name));
  tabsTemplate.appendChild(renderButton(mapButton, tab === mapButton.name));
  tabsTemplate.appendChild(renderButton(detailsButton, tab === detailsButton.name));

  const tabsContainer = document.getElementById(target);
  tabsContainer.innerHTML = '';
  tabsContainer.appendChild(tabsTemplate);
}
export default renderTabs;

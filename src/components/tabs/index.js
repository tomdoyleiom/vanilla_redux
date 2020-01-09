import Button from '../../models/Button';
import TabActions from '../../actions/tabActions';
import renderButton from '../button';
import store from '../../store';

function renderTabs(target = 'tabContainer') {
  const tabsTemplate = document.createElement('div');

  const themesButton = new Button('Themes', 'theme_button', () => {
    store.dispatch(TabActions.themesTab());
  });
  const mapButton = new Button('Map', 'map_button', () => {
    store.dispatch(TabActions.mapTab());
  });
  const detailsButton = new Button('Details', 'details_button', () => {
    store.dispatch(TabActions.detailsTab());
  });

  tabsTemplate.appendChild(renderButton(themesButton));
  tabsTemplate.appendChild(renderButton(mapButton));
  tabsTemplate.appendChild(renderButton(detailsButton));

  const tabsContainer = document.getElementById(target);
  tabsContainer.innerHTML = '';
  tabsContainer.appendChild(tabsTemplate);
}
export default renderTabs;

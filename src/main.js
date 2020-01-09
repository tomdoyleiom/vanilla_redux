import renderDetailsPage from './pages/details';
import renderMapPage from './pages/map';
import renderTabs from './components/tabs';
import renderThemesPage from './pages/themes';
import store from './store';

window.render = () => {
  const { tab } = store.getState();
  document.getElementById('pageContainer').innerHTML = '';
  renderTabs('tabContainer');
  switch (tab) {
    case 'themes':
      renderThemesPage('pageContainer');
      break;
    case 'map':
      renderMapPage('pageContainer');
      break;
    case 'details':
      renderDetailsPage('pageContainer');
      break;
    default:
  }
};

window.onload = () => {
  store.subscribe(window.render);
  store.dispatch({ type: 'new' });
};

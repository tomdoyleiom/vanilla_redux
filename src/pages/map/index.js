import html from '../../utilities/html';
import initialiseMap from '../../utilities/map';
import menu from '../../components/menu';
import store from '../../store';

/* eslint-disable operator-linebreak */
function renderMapPage(target = 'pageContainer') {
  const { map } = store.getState();
  initialiseMap('mapouter', map);

  // houses arcgis map
  // get the basic template HTML
  const pageTemplate = html`
  <div id="mapouter"></div>
  `;

  const targetElement = document.getElementById(target);

  targetElement.innerHTML = '';
  targetElement.appendChild(pageTemplate);
  targetElement.appendChild(menu());
}

export default renderMapPage;

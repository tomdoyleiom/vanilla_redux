import html from '../../utilities/html';
import { loadModules } from 'esri-loader';
import menu from '../../components/menu';

/* eslint-disable operator-linebreak */
function renderMapPage(target = 'pageContainer') {
  loadModules(['esri/Map', 'esri/views/SceneView']).then(([Map, SceneView]) => {
    const map = new Map({
      basemap: 'hybrid',
      ground: 'world-elevation',
    });

    const view = new SceneView({
      container: 'mapouter',
      map,
      camera: {
        position: { // observation point
          x: -118.80800,
          y: 33.96100,
          z: 2500000, // altitude in meters
        },
      },
    });
  }).catch((err) => {
    // console.error(err);
  });


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

import html from '../../utilities/html';
/* eslint-disable operator-linebreak */
function renderMapPage(target = 'pageContainer') {
  // get the basic template HTML
  const pageTemplate = html`
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=method4&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
    <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
    </style>
  </div>
  `;

  const targetElement = document.getElementById(target);
  targetElement.innerHTML = '';
  targetElement.appendChild(pageTemplate);
}

export default renderMapPage;

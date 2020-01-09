/* eslint-disable operator-linebreak */
function renderMapPage(target = 'pageContainer') {
  // get the basic template HTML
  const pageTemplate =
  /* html */
  `
  <div class="map-page">
    <div id="themes-container">
      <p>I do believe I'm a map!</p>
    </div>
  </div>
  `;

  // parse it as html
  const res = new DOMParser().parseFromString(pageTemplate, 'text/html');
  const element = [...res.body.children][0];

  const targetElement = document.getElementById(target);
  targetElement.innerHTML = '';
  targetElement.appendChild(element);
}

export default renderMapPage;

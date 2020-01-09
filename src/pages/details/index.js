import html from '../../utilities/html';
/* eslint-disable operator-linebreak */
function renderDetailsPage(target = 'pageContainer') {
  // get the basic template HTML

  const pageTemplate = html`
  <div class="map-page">
    <div id="themes-container">
      <p>I do believe I'm the details tab!</p>
    </div>
  </div>
  `;

  // parse it as html

  const targetElement = document.getElementById(target);
  targetElement.innerHTML = '';
  targetElement.appendChild(pageTemplate);
}

export default renderDetailsPage;

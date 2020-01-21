import html from '../../../utilities/html';

function getSatelliteDropDown(satelliteCategories = undefined) {
  const htmlsatellites = [];
  if (satelliteCategories !== undefined) {
    satelliteCategories.prototype.forEach((satelliteCategory) => {
      /* HTML */
      const optionElement = html`
        <option value="${satelliteCategory.id}">${satelliteCategory.name}</option>
      `;
      htmlsatellites.push(optionElement);
    });

    return htmlsatellites;
  }


  return htmlsatellites;
}

function populateSkyRadiusDropDown() {
  const min = 0;
  const max = 90;
  const step = 5;
  const stepCount = (max - min) / step + 1;
  let currValue = min;
  const elements = [];
  for (let i = 0; i < stepCount; i += 1, currValue += step) {
    const opt = document.createElement('option');
    opt.value = currValue;
    opt.innerHTML = currValue;
    elements.push(opt);
  }
  return elements;
}

function template(satelliteData = {}) {
  // <p id="SatelliteCount">Satellites: ${satelliteData.satellites.count}</p>
  // <p id="TransactionCount">Transaction Count: ${satelliteData.transactionCount}</p>
  // <p id="MinAlltitude">Lowest Alltitude: ${satelliteData.lowest}km</p>
  // <p id="MaxAlltitude">Heighest Alltitude: ${satelliteData.heighest}km</p>
  const innerTemplate = /* html */ `
  <div id='Satellite' class="tabcontent">
  <input type="hidden" id="NoSatellites" value="No Sattelites Found!" />
  <h3>Satellite Tracker</h3>

  Satellite Category:
  <select id="satelliteCategoryDropDown">

  </select>
  <br>
  Sky Radius:
  <select id="satelliteRadiusDropDown">

  </select>
  <br>
  Interval Timer:
  <select id="satelliteIntervalTimerDropDown">
    <option value="5000">5</option>
    <option value="10000">10</option>
    <option value="15000">15</option>
    <option value="20000">20</option>
    <option value="25000">25</option>
    <option value="30000" selected=true>30</option>
    <option value="35000">35</option>
    <option value="40000">40</option>
  </select>
  <br>
  <button id="runBtn">Find Sattellites</button>
</div>
`;
  let options = [];
  const renderedTemplate = html(innerTemplate);
  if (satelliteData.satellites) {
    options = getSatelliteDropDown(satelliteData.satellites);
  }
  const satCatDropDown = renderedTemplate.querySelector(
    '#satelliteCategoryDropDown',
  );
  if (options.length) {
    options.forEach((option) => satCatDropDown.appendChild(option));
  }

  const skyRadiusDropDown = renderedTemplate.querySelector(
    '#satelliteRadiusDropDown',
  );
  const radii = populateSkyRadiusDropDown();
  if (radii.length) {
    radii.forEach((radius) => skyRadiusDropDown.appendChild(radius));
  }
  return renderedTemplate;
}

export default template;

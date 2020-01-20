const template = /* html */`
<div id='Satellite' class="tabcontent">
  <input type="hidden" id="NoSatellites" value="No Sattelites Found!" />
  <h3>Sattellite Tracker</h3>
  <p id="SatelliteCount">Satellites: 00</p>
  <p id="TransactionCount">Transaction Count: 00</p>
  <p id="MinAlltitude">Lowest Alltitude: 00 (km)</p>
  <p id="MaxAlltitude">Heightest Alltitude: 00 (km)</p>
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

export default template;

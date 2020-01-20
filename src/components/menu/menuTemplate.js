import html from '../../utilities/html';

const template = html`
  <div id="menuView">
  <div class="tab" id="tab">
    <button class="tablinks" >Satellite Tracker</button>
    <button class="tablinks" id="defaultOpen">ISS Tracker</button>
    <button class="tablinks" >NextBike Tracker</button>
    <button class="tablinks" >Cardiff Park Poly</button> 
  </div>
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
  <div id="ISS-Tracker" class="tabcontent">
    <h3>ISS Tracker</h3>
    Interval Timer:
    <select id="issIntervalTimerDropDown">
      <option value="5000" selected=true>5</option>
      <option value="10000">10</option>
      <option value="15000">15</option>
      <option value="20000">20</option>
      <option value="25000">25</option>
      <option value="30000">30</option>
      <option value="35000">35</option>
      <option value="40000">40</option>
    </select>
    <br>
    <input type="checkbox" name="viewIss" value="viewISS" id="viewIss">Fix View on ISS <br>
    <br>
    <button id="btnTrackISS">Track ISS</button>
  </div>
  <div id="NextBike-Loc" class="tabcontent">
    <h3>NextBike loc</h3>
    <p id="BikeCount">NextBike Count: 00</p>
    Country Location:
    <select id="nextBikeCountryDropDown">
    </select>
    <br>
    City Location:
    <select id="nextBikeCityDropDown">
    </select>
    <br>
    <h4>Legend</h4>
    <div id="bikeText"><img id="bikeImg" src="./imgs/icons/bike_100.png" alt="Bike icon indicating all bikes available"> 100% Bikes available at rack</div>
    <div id="bikeText"><img id="bikeImg" src="./imgs/icons/bike_zero.png" alt="Bike icon indicating no bikes available"> 0% Bikes available at rack</div>
    <div id="bikeText"><img id="bikeImg" src="./imgs/icons/bike_only.png" alt="Bike only icon"> Rouge bike!</div>
    <br>
    <input type="checkbox" name="viewBikes" value="viewBikes" id="viewBikes" >View Rogue Bikes! <br>
    <br>
    <button id="btnNextBike">Display NextBike Locations</button>
  </div>
  <div id="CardiffPark-Poly" class="tabcontent">
    <h3>Cardiff Park Poly</h3>
    <br>
    <button id="btnCardiffParkPoly">Display Cardiff Park Locations</button>
  </div>
  <div id="Feedback"></div>
  </div>
`;

export default template;

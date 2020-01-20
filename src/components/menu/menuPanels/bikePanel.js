const template = /* html */`
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
</div>`;
export default template;

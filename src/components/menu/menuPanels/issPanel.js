const template = /* html */`
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
  `;
export default template;

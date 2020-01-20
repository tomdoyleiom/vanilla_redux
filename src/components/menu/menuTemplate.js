import html from '../../utilities/html';

const template = html(`
  <div id="menuView">
  <div class="tab" id="tab">
    <button class="tablinks" >Satellite Tracker</button>
    <button class="tablinks" id="defaultOpen">ISS Tracker</button>
    <button class="tablinks" >NextBike Tracker</button>
    <button class="tablinks" >Cardiff Park Poly</button> 
  </div>


`);

export default template;

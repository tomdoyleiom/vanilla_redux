import Theme from './models/Theme';

const urban = new Theme('Urban', ['Peter Frost']);
const enclosedFarmland = new Theme('Enclosed Farmland', ['Nicola Taylor', 'Melanie Meadon']);

// create a nested theme for freshwater
const fisheries = new Theme('Fisheries');
// add a nested theme to a theme
const freshWater = new Theme('Freshwater', ['John Clark', 'Rob Blacklidge'], [fisheries]);

// create nesteed themes for healthyPlaces
const peopleAndTheEnvironment = new Theme('People & the Environment');
const healthRecreationAndWellbeing = new Theme('Health Recreation & Wellbeing', ['Heather Crump', 'Ros Owen', 'Susan Williams']);
const attitudesAndBehaviours = new Theme('Attitudes & Behaviours');
const geoDiversity = new Theme('Geodiversity', ['Raymond Roberts']);
const healthyPlaces = new Theme('Healthy Places', [], [
  peopleAndTheEnvironment,
  healthRecreationAndWellbeing,
  attitudesAndBehaviours,
  geoDiversity,
]);

export default [
  urban,
  enclosedFarmland,
  freshWater,
  healthyPlaces,
];

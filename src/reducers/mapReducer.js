const defaultState = {
  featureLayers: [
    'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0',
  ],
};

export default function mapReducer(state = defaultState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

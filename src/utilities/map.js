import { loadModules } from 'esri-loader';

function initialiseMap(container, data) {
  loadModules(['esri/views/MapView', 'esri/WebMap', 'esri/layers/FeatureLayer'])
    .then(([MapView, WebMap, FeatureLayer]) => {
    // then we load a web map from an id
      const map = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: 'f2e9b762544945f390ca4ac3671cfa72',
        },
      });

      if (data.featureLayers) {
        data.featureLayers.forEach((feature) => {
          const layer = new FeatureLayer({ url: feature });
          map.add(layer);
        });
      }
      // and we show that map in a container w/ id #viewDiv
      // don't need to new this.
      MapView({ map, container });
    })
    .catch((err) => {
    // handle any errors
      console.error(err);
    });
}

export default initialiseMap;

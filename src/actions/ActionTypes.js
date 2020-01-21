export var SatelliteActionTypes = {
    ADD_CATEGORIES: 'ADD_CATEGORIES',
    CLEAR_CATEGORIES: 'CLEAR_CATEGORIES',
    GET_SATELLITES_DATA: 'GET_SATELLITES_DATA',
    CLEAR_SATELLITES_DATA: 'CLEAR_SATELLITES_DATA',
    DISPLAY_SATELLITES: 'DISPLAY_SATELLITES', // display satellite positions, colour coded by height
    START_TRACKING_SATELLITES: 'START_TRACK_SATELLITES',    // start interval 
    STOP_TRACKING_SATELLITES: 'STOP_TRACK_SATELLITES',      // stop interval
}

export var ISSActionTypes = {
    GET_ISS_POSITION: 'GET_ISS_POSITION', // get iss current position [lat, long]    
    DISPLAY_ISS_POSITION: 'DRAW_ISS_POSITION', // this is will call an action to draw the ISS position onto the arcGIS map, update icon trail, ISS view cicle and ISS path     
    UPDATE_ISS_TRAIL: 'UPDATE_ISS_TRAIL',
    UPDATE_ISS_CICLE: 'UPDATE_ISS_CICLE',
    UPDATE_ISS_PATH: 'UPDATE_ISS_PATH',
    SET_VIEW_TO_ISS_POSITION: 'SET_VIEW_TO_ISS_POSITION', // move map camera to iss position (true, false)
    START_TRACKING_ISS: 'START_TRACK_ISS',  // start interval 
    STOP_TRACKING_ISS: 'STOP_TRACK_ISS',    // stop interval 
}

export var CardiffParkActionTypes = {
    DISPLAY_CARDIFF_PARK: 'DISPLAY_CARDIFF_PARK'
}

export var ArcGISActionTypes = {
    SETUP_ARCGIS_MAP_VIEW: 'SETUP_ARCGIS_MAP_VIEW', // setup map view, assign to div, add all required layers
    CLEAR_ALL_MAP_LAYERS: 'CLEAR_ALL_MAP_LAYERS', // clears all map layers
    ADD_ITEMS_TO_GRAPHICS_LAYER: 'ADD_ITEMS_TO_GRAPHICS_LAYER', // this graphics layer is used to display satellite positions, ISS current position and previous 5 positions, NextBike bike racks
    ADD_ITEMS_TO_ISS_CIRCLE_LAYER: 'ADD_ITEMS_TO_ISS_CIRCLE_LAYER',
    ADD_ITEMS_TO_ISS_PATH_LAYER: 'ADD_ITEMS_TO_ISS_PATH_LAYER',
    ADD_ITEMS_TO_FEATURE_LAYER: 'ADD_ITEMS_TO_FEATURE_LAYER',
    ADD_ITEMS_TO_BIKE_ONLY_LAYER: 'ADD_ITEMS_TO_BIKE_ONLY_LAYER'
}
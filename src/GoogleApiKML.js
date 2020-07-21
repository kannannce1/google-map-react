import React from "react";
import GoogleMapReact from "google-map-react";

const onGoogleApiLoaded = (map, maps) => {
  //var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
  var src = 'http://iblogbox.github.io/js/gpx/sample/Blackbirds.kmz';
  
  var triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 }
  ];

  // Construct the polygon.
  var bermudaTriangle = new maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35
  });
 // bermudaTriangle.setMap(map);

  var kmlLayer = new maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
};



const GoogleApiKML = () => (
  <GoogleMapReact
    defaultCenter={{ lat: 24.886, lng: -70.268 }}
    defaultZoom={5}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}
  />
);

export default GoogleApiKML;

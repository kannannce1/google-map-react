//import React from "react";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from 'axios';
//import KMZGeoJSON from 'kmz-geojson';
import toGeoJSON from '@mapbox/togeojson';





var onGoogleApiLoaded = (map, maps) => {
  var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
  //var KMZUrl = 'http://iblogbox.github.io/js/gpx/sample/Blackbirds.kmz';
  //var KMZUrl = 'https://github.com/kannannce1/google-map-react/blob/master/public/otherRestrictionsRas.kmz';

  //var KMZGeoJSON = require('kmz-geojson');

  //KMZGeoJSON.toGeoJSON(KMZUrl, function(err, json) {
    // Do something with the GeoJSON data.
    //console.log("working")
  //});


 
  
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


/*
const GoogleApiKML = () => (
  <GoogleMapReact
    defaultCenter={{ lat: 24.886, lng: -70.268 }}
    defaultZoom={5}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}
  />
);
*/
class GoogleApiKML extends Component {

  componentDidMount(){
    let url = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
    axios.get(url).then(res => {
      console.log(res.data, '....');
     // console.log(toGeoJSON.kml(res));
    var  parser = new DOMParser();
    var  xmlDoc = parser.parseFromString(res.data,"text/xml");
    var coordinates = xmlDoc.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue;
    console.log('coordinates', coordinates)
    });
   }
  

render() {
  return (
    <GoogleMapReact
        defaultCenter={{ lat: 24.886, lng: -70.268 }}
        defaultZoom={5}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}
      />
  )
}
};

export default GoogleApiKML;

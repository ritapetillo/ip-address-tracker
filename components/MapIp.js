import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function MapIp({ cordinates }) {
  const position = cordinates ? [cordinates?.lat, cordinates?.lng] : [1, 1];
  // const position = [51.505, -0.09];

  return (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

export default MapIp;

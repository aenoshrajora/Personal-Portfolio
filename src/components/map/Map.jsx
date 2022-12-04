import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer
      center={[26.7861, 80.94476]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[26.7861, 80.94476]}>
        <Popup>Here's where I live. You are free to visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Aenosh Rajora</h3>
        <span>A.K.A. Penetration Tester</span>
        <br />
        <span>Location : Telibagh, Lucknow, India</span>
        <br />
        <span>Email: aenoshrajora79@gmail.com</span>
        </div>
    </MapContainer>
  );
}

export default Map

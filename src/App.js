import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";
import * as studySpots from "./data/study-spots.json";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
  marginRight: "auto",
  marginLeft: "auto",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false,
};
const center = {
  lat: 52.333642,
  lng: 4.865137,
};

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    //Remember to set API restriction to URL after product is ready
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [selectedSpot, setSelectedSpot] = React.useState(null);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>
        VU Study Spots &nbsp;
        <span role="img" aria-label="university">
          🏫
        </span>
      </h1>

      <div className="mapContainer">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          options={options}
          center={center}
        >
          {studySpots.features.map((spot) => (
            <Marker
              key={spot.properties.id}
              position={{
                lat: spot.geometry.coordinates[0],
                lng: spot.geometry.coordinates[1]
              }}
              onClick={() => {
                setSelectedSpot(spot);
              }}
            />
          ))}

          {selectedSpot ? (
            <InfoWindow
              position={{
                lat: selectedSpot.geometry.coordinates[0],
                lng: selectedSpot.geometry.coordinates[1]
              }}
              onCloseClick={() => {
                setSelectedSpot(null);
              }}
            >
              <div>
                <p>
                  Room: {selectedSpot.properties.room}
                </p>
                <p>
                  Floor: {selectedSpot.properties.floor}
                </p>
                <p>
                  Building: {selectedSpot.properties.building}
                </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}
